import React from "react";
import gsap from "gsap";
import "./styles/App.scss";

// Component Import
import Navbar from "./components/navbar";

// Page Import
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  // wait for page to load then show body

  gsap.from("body", {
    duration: 1,
    css: {
      visibility: "hidden",
      opacity: 0,
    },
  });

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
