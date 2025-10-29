import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e?.preventDefault();
    const q = value.trim();
    if (!q) return;
    onSearch(q);
  };

  return (
    <form
      onSubmit={submit}
      className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden"
    >
      <input
        className="flex-1 p-3 text-gray-800 focus:outline-none"
        placeholder="Search books by title… e.g. 'harry potter'"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="p-3 bg-purple-600 hover:bg-purple-700 text-white transition-colors"
      >
        Search
      </button>
    </form>
  );
}
