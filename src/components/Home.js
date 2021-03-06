import React from "react";
import headshot from "../images/moodyHead.jpeg";
import background from "../images/background.jpg";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: `center`,
        }}
      >
        <div id="animationContainer" className="console-container">
          <span id="text"></span>
          <div className="console-underscore" id="console">
            &#95;
          </div>
        </div>
        <img id="moody-headshot" src={headshot} alt="Andrew Moody." />
        <div className="buttons">
          <button className="homeButtons">
            <Link to={"/projects"}>Projects</Link>
          </button>
          <button className="homeButtons">
            <a
              href="https://github.com/andrewmoody96"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}
