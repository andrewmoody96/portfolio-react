import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Audio from "./components/Audio";
import About from "./components/About";
import Dev from "./components/Dev";
import Contact from "./components/Contact";

import "./output.css";
library.add(fas, far, faInstagram, faGithub, faLinkedin);

function App() {
  return (
    <Router>
      <div className="">
        <Link to="/">
          <h1 className="text-center text-[#6C4B5E] text-4xl mt-2 font-audiowide">
            Andrew Moody
          </h1>
        </Link>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Audio />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
