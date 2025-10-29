import React from "react";

function coverUrl(book) {
  if (book.cover_i)
    return `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
  const isbn = book.isbn?.[0];
  if (isbn) return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
  return `https://via.placeholder.com/150x220?text=No+Cover`;
}

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={coverUrl(book)}
        alt={book.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{book.title}</h3>
        <p className="text-gray-600">
          {book.author_name ? book.author_name.join(", ") : "Unknown author"}
        </p>
        <p className="text-gray-500 mt-1">
          First published: {book.first_publish_year || "N/A"}
        </p>
        {book.publisher?.[0] && (
          <p className="text-gray-500">Publisher: {book.publisher[0]}</p>
        )}
        <a
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm"
        >
          View on Open Library
        </a>
      </div>
    </div>
  );
}
