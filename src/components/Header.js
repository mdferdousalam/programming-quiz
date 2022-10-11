import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold p-10">Programming Interwiew</h1>
      <div className="text-3xl font-medium p-10">
        <Link className="p-10" to="/home">
          Home
        </Link>
        <Link className="p-10" to="/statistics">
          Statistics
        </Link>
        <Link className="p-10" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Header;