import React from "react";
import "../../assets/styles/Navbar.css";
import "../../assets/js/Navbar.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav class="navbar">
        <div class="logo">
          <div class="logo-container">
            <div class="logo-circle"></div>
            <div class="logo-text">Todo App</div>
          </div>
        </div>

        <div class="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <ul class="nav-menu">
          <li class="nav-item">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/addtodo" class="nav-link">
              Create todo
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/todos" class="nav-link">
              List todos
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/users" class="nav-link">
              Users
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/loader" class="nav-link">
              Loader
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
