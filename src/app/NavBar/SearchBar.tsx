// components/SearchBar.js
import React from "react";

interface SearchBarProps {
  ws: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ ws }) => {
  return (
    <input
      type="text"
      className="px-4 py-2 w-2/4 rounded-md max-w-md bg-slate-200"
      placeholder="Search..."
    />
  );
};
