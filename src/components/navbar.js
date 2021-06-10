import React, { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div>
      <div className="navbar__wrapper">
        <div className="container">
          <div className="row">
            <div className="logo__wrapper">
              <span>Mitul Pancholi</span>
              <span>Frontend Developer</span>
            </div>
            <div
              className={
                hamburger ? "hamburger__icon active" : "hamburger__icon"
              }
              onClick={() => setHamburger(!hamburger)}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          hamburger ? "menu__wrapper active" : "menu__wrapper"
        }
      >
        <div className="menu__listing">
          <div className="list__wrapper">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="showcase__wrapper">
          <span>L</span>
          <span>E</span>
          <span>T</span>
          <span>'</span>
          <span>S</span>
          <span> </span>
          <span>M</span>
          <span>A</span>
          <span>K</span>
          <span>E</span>
          <span></span>
          <span>A</span>
          <span> </span>
          <span>D</span>
          <span>I</span>
          <span>F</span>
          <span>F</span>
          <span>E</span>
          <span>R</span>
          <span>E</span>
          <span>N</span>
          <span>C</span>
          <span>E</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
