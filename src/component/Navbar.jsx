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

      <div className="hero">
        <div className="content">
          <h2>Travel With <br /> Us, Cheaply</h2>
          <p>28°C Cloudy</p>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                cx="20"
                cy="20"
                r="19"
                stroke="#24201D"
                stroke-width="2"
              />
              <rect
                x="13"
                y="19.6569"
                width="8"
                height="2"
                rx="1"
                transform="rotate(-45 13 19.6569)"
                fill="#24201D"
              />
              <rect x="13" y="19" width="14" height="2" rx="1" fill="#24201D" />
              <rect
                x="14.4142"
                y="19"
                width="8"
                height="2"
                rx="1"
                transform="rotate(45 14.4142 19)"
                fill="#24201D"
              />
            </g>
          </svg>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                r="19"
                transform="matrix(-1 0 0 1 20 20)"
                stroke="#24201D"
                stroke-width="2"
              />
              <rect
                width="8"
                height="2"
                rx="1"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27 19.6569)"
                fill="#24201D"
              />
              <rect
                width="14"
                height="2"
                rx="1"
                transform="matrix(-1 0 0 1 27 19)"
                fill="#24201D"
              />
              <rect
                width="8"
                height="2"
                rx="1"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 25.5858 19)"
                fill="#24201D"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
