import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  // Here we declare a state boolean variable "loggedIn" and a function to update it.
  // const [loggedIn, setLoggedIn] = useState(false);

  // We return the Welcome component and pass loggedIn and setLoggedIn as props.
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Navbar />
        <div className="container">
          <Routes>
            {/* Define routes to render different page components at different paths */}
            <Route path="/" element={<Home />} />
            {/* Define a route that will take in variable data */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
