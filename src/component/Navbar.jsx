import React from "react";
import "./style/navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navigation">
        <div className="logo">
          <h2>EzStay</h2>
        </div>

        <div className="btn">
          <p>Log in</p>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
