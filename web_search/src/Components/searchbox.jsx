import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center">
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter search query"
            className="border-solid border-2 py-2 px-8 rounded border-black hover:border-gray-500"
          />
        </div>
        
        <div className="px-4">
          <button type="submit" className="bg-[#000B58] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <FaSearch />
          </button>
        </div>

        </div>
    </form>
  );
};

export default SearchBox;
