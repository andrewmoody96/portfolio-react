import React from "react";
import { Link } from "react-router-dom";
// Here we destructure our props into their own distinct variables
export default function withRouter(Header) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div id="header">
      <header>
        <div id="headerText">
          <a href="/">
            <h1>A.Moody</h1>
            <h2>A.Moody</h2>
            <p id="headerPara">MERN & Music</p>
          </a>
        </div>
        <nav>
          <button className="navButtons">
            <Link to={"/projects"}>Projects</Link>
            {/* <a href="/projects" rel="noreferrer">
            </a> */}
          </button>
          <button className="navButtons">
            <Link to={"#footer"}>Contact</Link>
            {/* <a href="#footer" rel="noreferrer">
              Contact
            </a> */}
          </button>
          <button className="navButtons">
            <Link to={"#footer"}>About Me</Link>
            {/* <a href="/about" rel="noreferrer">
              About Me
            </a> */}
          </button>
        </nav>
      </header>
    </div>
  );
}
