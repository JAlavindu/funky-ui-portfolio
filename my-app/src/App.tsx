import React from "react";
import CanvasContainer from "./components/CanvasContainer";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="App">
      <Cursor />
      <CanvasContainer />
      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
