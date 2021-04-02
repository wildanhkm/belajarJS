import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-green-500 px-1 py-2">
          <input
            type="text"
            className="appearence-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 py-1 leading-tight focus:outline-none"
            placeholder="Search for image"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white px-2 py-1 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
