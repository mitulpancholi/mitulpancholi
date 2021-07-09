import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from(".about__title", {
      scrollTrigger: {
        trigger: ".about__section",
        start: "start center+=200",
        end: "end center+=50",
        scrub: 1,
        // pin: true,
        // markers: true,
      },
      xPercent: "-10",
    });
  });

  return (
    <section className="about__section">
      <div className="about__wrapper">
        <div className="about__title">About Me</div>
        <h2>
          Front-end developer who cares deeply about user experience. Design to
          Engage & Impact.
        </h2>
      </div>
    </section>
  );
};

export default About;
