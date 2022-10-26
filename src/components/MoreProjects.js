import React from "react";
import fishAppCapture from "../images/fishAppCapture.png"
import JATE from "../images/jatePWA.png"
import passwordGenCapture from "../images/passwordGenCapture.png"
import background from '../images/background.jpg'


export default function MoreProjects({ loggedIn, setLoggedIn }) {
  return (
    <div style={{backgroundImage: `url(${background})`, backgroundPosition: `center`}}>
        <div id="other-app">
        <div className="card">
            <a
              href="https://dive-buddy-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Dive Buddy</h3>
              <h5>Dive Buddy</h5>
              <h6 className="app-description">
                Log your dives, check out your friend's dive info, and practice safety when attempting your next dive.
              </h6>
              {/* UPDATE PIC */}
              <img
                className="other-app-pic"
                // src={fishAppCapture}
                alt="Web application."
              />
            </a>
            <button className="repoButtons">
              <a
                href="https://github.com/P3-sharkBait/diveBuddy"
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
        </div>
    </div>
  );
}
