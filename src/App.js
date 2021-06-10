import React from "react";
import "./styles/App.scss";

// Component Import
import Navbar from "./components/navbar";

// Page Import
import Home from "./pages/home"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
