import { useState, useEffect } from "react";
import Header from './Components/Header'
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/project";
import Contact from "./Components/Contact";
import Skills from "./Components/Skils";
import './App.css'

function App() {



  return (
    <>
      <Header  />
      <Home/>
      <About/>
      <Project/>
    <Skills />
      <Contact/>
      
    </>
  )
}

export default App
