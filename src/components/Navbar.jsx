import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    // Navigate in the same tab
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);

    // Clear input
    setSearchTerm("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  return (
    <nav className="nav-container my-container flex flex-wrap align-center bg-primary fixed top-0 left-0 right-0 z-10 justify-around px-8 py-4 font-serif">
      <div className="logo font-bold text-black text-2xl">
        <span className="text-green-900"> &lt;</span>
        NewsNexa
        <span className="text-green-900">/&gt;</span>
      </div>

      <div>
        <ul className="flex gap-16">
          <li>
            <Link className="cursor-pointer hover:font-bold p-4" to="/">Home</Link>
            <Link className="cursor-pointer hover:font-bold p-4" to="/about">About</Link>
            <Link className="cursor-pointer hover:font-bold p-4" to="/contact">Contact</Link>
            <Link className="cursor-pointer hover:font-bold p-4" to="/terms">Terms</Link>
          </li>
        </ul>
      </div>

      <div className="my-container flex flex-wrap gap-4">
        <input
          type="text"
          className="w-45 h-5 p-3 border-2 border-solid"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-quaternary text-white px-5 h-6 border-none cursor-pointer hover:bg-quinary active:bg-senary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
