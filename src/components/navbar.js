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
    </div>
  );
};

export default Navbar;
