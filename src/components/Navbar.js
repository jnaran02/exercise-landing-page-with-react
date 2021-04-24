import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="/#">
          Start Bootstrap
        </a>
        {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button> */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-white" href="/#">
              Home
            </a>
            <a className="nav-link" href="/#">
              About
            </a>
            <a className="nav-link" href="/#">
              Services
            </a>
            <a className="nav-link" href="/#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
