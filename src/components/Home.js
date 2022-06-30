import React from "react";
import headshot from '../images/moodyHead.jpeg'
// Here we destructure our props into their own distinct variables
export default function Home({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log("Welcome -> loggedIn", loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      <section>
        <div id="animationContainer" className="console-container">
          <span id="text"></span>
          <div className="console-underscore" id="console">
            &#95;
          </div>
        </div>
        <img
          id="moody-headshot"
          src={headshot}
          alt="Andrew Moody."
        />
        <div className="homeButtons">
          <button>
            <a href="/projects" rel="noreferrer">
              Projects
            </a>
          </button>
          <button>
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
