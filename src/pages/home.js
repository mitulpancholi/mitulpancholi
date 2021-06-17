import React, { useEffect } from "react";
import gsap from "gsap";

const tl = gsap.timeline();

const Home = () => {
  useEffect(() => {
    tl.from(".title__text h1", {
      duration: 1.0,
      // opacity: 0,
      y: 150,
      ease: "Power4.out",
      skewY: 7,
      delay: 1,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <div className="home__wrapper">
      <div className="container">
        <div className="row">
          <div className="title__text">
            <div style={{ overflow: "hidden" }}>
              <h1 className="full__name">Mitul Pancholi</h1>
            </div>
            {/* <h1>Self Taught Frontend Web Developer </h1> */}
            <div style={{ overflow: "hidden" }}>
              <h1 className="name__desc">Front-End Developer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
