import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const fetchBooks = async (q) => {
    if (!q) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(
          q
        )}&limit=30`
      );
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError(err.message || "Failed to fetch");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-2">
            📚 Book Finder for Alex
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Search books by title using Open Library API
          </p>
        </header>

        <SearchBar
          onSearch={(q) => {
            setQuery(q);
            fetchBooks(q);
          }}
        />

        <div className="mt-8">
          {loading && (
            <div className="flex items-center justify-center gap-2 text-gray-700 text-lg">
              <div className="loader" /> Searching...
            </div>
          )}
          {error && <div className="text-red-600 text-center">{error}</div>}
          {!loading && !error && query && books.length === 0 && (
            <div className="text-gray-700 text-center text-lg">
              No results found for “{query}”
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {books.map((b) => (
            <BookCard
              key={`${b.key}-${b.cover_i || b.first_publish_year}`}
              book={b}
            />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500">
          Powered by Open Library. Try: “harry potter”, “tolkien”, “pride and
          prejudice”
        </footer>
      </div>
    </div>
  );
}
