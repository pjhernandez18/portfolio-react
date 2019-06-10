import React from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Experience from './components/experience';
import Projects from './components/projects.js';
import Contact from './components/contact.js';


function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
      </div>
      {/* Main Content */}
      <div id="colorlib-main">
          <Home></Home>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
          <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
