import React from "react";
import fishAppCapture from "../images/fishAppCapture.png"
import JATE from "../images/jatePWA.png"
import passwordGenCapture from "../images/passwordGenCapture.png"

// Here we destructure our props into their own distinct variables
export default function MoreProjects({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
        <div id="other-app">
          <div className="card">
            <a
              href="https://andrewmoody96.github.io/1-fish-2-fish-red-fish-joe-fish/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>One Fish, Two Fish, Red Fish, Go Fish?</h3>
              <h6 className="app-description">
                An application to help ocean fishers find information on species
                and weather for the location they'll be fishing at.
              </h6>
              <img
                className="other-app-pic"
                src={fishAppCapture}
                alt="Web application."
              />
            </a>
            <a
              href="https://github.com/andrewmoody96/1-fish-2-fish-red-fish-joe-fish"
              title="GitHub"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
          <div className="card">
            <a
              href="https://jate-texteditingsoftware.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Just Another Text Editor</h3>
              <h6 className="app-description">
                A PWA text editor that can be used online & offline. 
              </h6>
              <img
                className="other-app-pic"
                src={JATE}
                alt="Web application."
              />
            </a>
            <a
              href="https://github.com/andrewmoody96/Text-Editor"
              title="GitHub"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
          <div className="card">
            <a
              href="https://andrewmoody96.github.io/moody-hw3-JSPasswordGenerator/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>JS Password Generator</h3>
              <h6>Generates a secure password.</h6>
              <img
                className="other-app-pic"
                src={passwordGenCapture}
                alt="Web application."
              />
            </a>
            <a
              href="https://github.com/andrewmoody96/moody-hw3-JSPasswordGenerator"
              title="GitHub"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
    </div>
  );
}
