import React, { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <div className="navbar__wrapper">
        <div className="container">
          <div className="row">
           
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
      <div className={hamburger ? "menu__wrapper active" : "menu__wrapper"}>
        <div className="menuSpace__wrapper">
          <div className="menu__listing">
            <div className="list__wrapper">
              <ul>
                <li>Home</li>
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="showcase__wrapper">
            <h5 className="lets__wrapper">
              <span>L</span>
              <span>E</span>
              <span>T</span>
              <span>S</span>
            </h5>

            <h5 className="make__wrapper">
              <span>M</span>
              <span>A</span>
              <span>K</span>
              <span>E</span>
            </h5>

            <h5 className="showCaseA__wrapper">
              <span>A</span>
            </h5>

            <h5 className="diff__wrapper">
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
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
