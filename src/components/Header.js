import React from "react";

// Here we destructure our props into their own distinct variables
export default function Header({ loggedIn, setLoggedIn }) {
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
            <a href="/projects" rel="noreferrer">
              Projects
            </a>
          </button>
          <button className="navButtons">
            <a href="#footer" rel="noreferrer">
              Contact
            </a>
          </button>
          <button className="navButtons">
            <a href="/about" rel="noreferrer">
              About Me
            </a>
          </button>
        </nav>
      </header>
    </div>
  );
}
