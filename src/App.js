import React, { Component } from "react";
import "./App.css";
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';

import { BrowserRouter as Router, 
  Routes,
  Route} 
  from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects/>}/>
    
      </Routes>
    </Router>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
        </style>
        </>
    );
  }
}

export default App;

