import React from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import Home from './components/home.js';


function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
      </div>
      {/* Main Content */}
      <div id="colorlib-main">
          <Home></Home>
      </div>
    </div>
  );
}

export default App;
