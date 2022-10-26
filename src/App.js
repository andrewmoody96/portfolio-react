import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, withRouter } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import "./app.css";
library.add(fas, far, faInstagram, faGithub, faLinkedin)


function App() {
  
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* doesn't nav to the ID. couldn't figure this one out */}
            <Route path="#footer"/>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
