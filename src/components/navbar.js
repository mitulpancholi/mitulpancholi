import React, { useState, useEffect } from "react";
import gsap from "gsap";

const tl = gsap.timeline();

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1366) {
      if (hamburger === true) {
        tl.from(".list__wrapper", {
          duration: 0.7,
          opacity: 0,
          delay: 0.4,
        });
      } else {
        tl.to(".showcase__wrapper", {
          opacity: 0,
          duration: 0.2,
        });
      }
    } else {
      if (hamburger === true) {
        tl.from(".list__wrapper", {
          duration: 0.7,
          opacity: 0,
          delay: 0.4,
        })
          .to(".showcase__wrapper", {
            opacity: 1,
            duration: 0,
            delay: -0.4,
          })
          .from(".lets__wrapper span", {
            duration: 0.7,
            opacity: 0,
            delay: -0.4,
            stagger: {
              amount: 0.1,
            },
          })
          .from(".make__wrapper span", {
            duration: 0.7,
            opacity: 0,
            delay: -0.4,
            stagger: {
              amount: 0.1,
            },
          })
          .from(".showCaseA__wrapper span", {
            duration: 0.7,
            opacity: 0,
            delay: -0.4,
            stagger: {
              amount: 0.1,
            },
          })
          .from(".diff__wrapper span", {
            duration: 0.7,
            opacity: 0,
            delay: -0.4,
            stagger: {
              amount: 0.18,
            },
          });
      } else if (hamburger === false) {
        tl.to(".showcase__wrapper", {
          opacity: 0,
          duration: 0.2,
        });
      }
    }
  }, [hamburger]);

  const setData = (event) => {
    if (tl.isActive()) {
      event.preventDefault();
    } else {
      setHamburger(!hamburger);
    }
  };

  return (
    <>
      <div className="navbar__wrapper">
        <div className="container">
          <div className="row">
            <div
              className={
                hamburger ? "hamburger__icon active" : "hamburger__icon"
              }
              onClick={setData}
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
