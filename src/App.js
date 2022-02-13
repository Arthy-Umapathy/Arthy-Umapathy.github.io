import './App.css';
import React from "react"
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Experience/> 
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
