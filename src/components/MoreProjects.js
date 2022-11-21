import React from "react";
import fishAppCapture from "../images/fishAppCapture.png";
import divebuddyCapture from "../images/divebuddyCapture.jpg";

export default function MoreProjects({ loggedIn, setLoggedIn }) {
  return (
    <div>
      <div id="other-app">
        <section className="flex flex-col justify-center">
          <a
            href="https://dive-buddy-app.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="text-xl">Dive Buddy</h3>
            <div className="flex flex-row justify-center items-center">
              <img
                className="w-[55vw] rounded-lg mt-2"
                src={divebuddyCapture}
                alt="Web application."
              />
              <div className="flex flex-col justify-center">
                <h6 className="text-md">
                  Log your dives, check out your friend's dive info, and
                  practice safety when attempting your next dive.
                </h6>
                <button className="m-2 rounded-md bg-red-300 p-1 w-[10vw] place-self-center">
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
            </div>
          </a>
        </section>
        <section className="flex flex-col justify-center mt-4">
          <a
            href="https://andrewmoody96.github.io/1-fish-2-fish-red-fish-joe-fish/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="text-xl">One Fish, Two Fish, Red Fish, Go Fish?</h3>
            <div className="flex flex-row justify-center items-center">
              <img
                className="w-[55vw] rounded-lg mt-2"
                src={fishAppCapture}
                alt="Web application."
              />
              <div className="flex flex-col justify-center">
                <h6 className="text-md">
                  An application to help ocean fishers find information on
                  species and weather at their location.
                </h6>
                <button className="m-2 rounded-md bg-red-300 p-1 w-[10vw] place-self-center">
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
          </a>
        </section>
      </div>
    </div>
  );
};
