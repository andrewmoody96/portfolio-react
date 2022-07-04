import React from "react";
import fishAppCapture from "../images/fishAppCapture.png"
import JATE from "../images/jatePWA.png"
import passwordGenCapture from "../images/passwordGenCapture.png"
import background from '../images/background.jpg'

// Here we destructure our props into their own distinct variables
export default function MoreProjects({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundPosition: `center`}}>
        <div id="other-app">
          <div className="card">
            <a
              href="https://andrewmoody96.github.io/1-fish-2-fish-red-fish-joe-fish/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>One Fish, Two Fish, Red Fish, Go Fish?</h3>
              <h5>One Fish, Two Fish, Red Fish, Go Fish?</h5>
              <h6 className="app-description">
                An application to help ocean fishers find information on species
                and weather at their location.
              </h6>
              <img
                className="other-app-pic"
                src={fishAppCapture}
                alt="Web application."
              />
            </a>
            <button className="repoButtons">
              <a
                href="https://github.com/andrewmoody96/1-fish-2-fish-red-fish-joe-fish"
                title="GitHub"
                className="repoLink"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </button>
          </div>
          <div className="card">
            <a
              href="https://jate-texteditingsoftware.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h6 className="app-description">
              <h5>Just Another Text Editor</h5>
                A PWA text editor that can be used online & offline. 
              </h6>
              <img
                className="other-app-pic"
                src={JATE}
                alt="Web application."
              />
            </a>
            <button className="repoButtons">
              <a
                href="https://github.com/andrewmoody96/Text-Editor"
                title="GitHub"
                className="repoLink"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </button>
          </div>
          <div className="card">
            <a
              href="https://andrewmoody96.github.io/moody-hw3-JSPasswordGenerator/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>JS Password Generator</h3>
              <h5>JS Password Generator</h5>
              <h6>An app to generate a secure password.</h6>
              <img
                className="other-app-pic"
                src={passwordGenCapture}
                alt="Web application."
              />
            </a>
            <button className="repoButtons">
              <a
                href="https://github.com/andrewmoody96/moody-hw3-JSPasswordGenerator"
                title="GitHub"
                className="repoLink"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </button>
          </div>
        </div>
    </div>
  );
}
