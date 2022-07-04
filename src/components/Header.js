import React from "react";
import { Link } from "react-router-dom";
// Here we destructure our props into their own distinct variables
export default function Header() {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div id="header">
      <header>
        <div id="headerText">
          <Link to={""}>
            <h1>A.Moody</h1>
            <h2>A.Moody</h2>
            <p id="headerPara">MERN & Music</p>
          </Link>
        </div>
        <nav>
          <button className="navButtons">
            <Link to={"/projects"}>Projects</Link>
          </button>
          <button className="navButtons">
            <Link to={`#footer`}>Contact</Link>
          </button>
          <button className="navButtons">
            <Link to={"/about"}>About Me</Link>
          </button>
        </nav>
      </header>
    </div>
  );
}
