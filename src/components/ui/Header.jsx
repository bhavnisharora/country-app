import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand text-light" href="/">
          WorldAtlas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link text-light" href="/">
              Home
            </a>
            <a className="nav-link text-light" href="/about">
              About
            </a>
            <a className="nav-link text-light" href="/contact">
              Contact
            </a>
            <a className="nav-link text-light" href="/country">
              Country
            </a>
            <a className="nav-link text-light" href="/todo-country">
              Todo Country
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
