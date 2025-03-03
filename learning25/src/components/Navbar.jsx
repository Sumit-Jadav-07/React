import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-white">MovieApp</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/netflixmovies"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/netflixseries"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Series
            </Link>
          </li>
          <li>
            <Link
              to="/usememodemo"
              className="text-white transition-colors hover:text-gray-300"
            >
              UseMemoDemo
            </Link>
          </li>
          <li>
            <Link
              to="/findbomb"
              className="text-white transition-colors hover:text-gray-300"
            >
              Findbomb
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
