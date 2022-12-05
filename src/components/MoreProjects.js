import React from "react";
import fishAppCapture from "../images/fishAppCapture.png";
import divebuddyCapture from "../images/divebuddyCapture.jpg";

export default function MoreProjects({ loggedIn, setLoggedIn }) {
  return (
    <>
      <p className="text-xl border-b-2 border-[#6C4B5E] text-[#6C4B5E] font-josefin">
        Click an image to view the app.
      </p>
      <section className="mt-5">
        <div id="other-apps" className="grid grid-cols-1 tablet:grid-cols-2">
          <section className="flex flex-col justify-center mt-5">
            <a
              href="https://dive-buddy-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="text-left text-2xl font-audiowide text-[#6C4B5E] font-bold m-2 tablet:text-center">
                Dive Buddy
              </h2>
              <h6 className="text-md m-2">
                Log your dives, check out your friend's dive info, and practice
                safety when attempting your next dive.
              </h6>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-[85vw] tablet:h-[25vh] tablet:w-auto max-w-[80vw] rounded-md mt-2"
                  src={divebuddyCapture}
                  alt="Web application."
                />
              </div>
            </a>
            <button className="m-2 rounded-md bg-[#6C4B5E] p-1 w-[10vw] place-self-center text-[#FCF2E2] hover:text-red-600 hover:bg-[#6C4B5E]/50">
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
          </section>
          <section className="flex flex-col justify-center mt-5">
            <a
              href="https://andrewmoody96.github.io/1-fish-2-fish-red-fish-joe-fish/"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="text-left tablet:text-center text-2xl font-audiowide text-[#6C4B5E] font-bold m-2">
                One Fish, Two Fish, Red Fish, Go Fish?
              </h2>
              <h6 className="text-md m-2">
                An application to help ocean fishers find information on species
                and weather at their location.
              </h6>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-[85vw] tablet:h-[25vh] tablet:w-auto max-w-[80vw] rounded-md mt-2"
                  src={fishAppCapture}
                  alt="Web application."
                />
              </div>
            </a>
            <button className="m-2 rounded-md bg-[#6C4B5E] p-1 w-[10vw] place-self-center text-[#FCF2E2] hover:text-red-600 hover:bg-[#6C4B5E]/50">
              <a
                href="https://github.com/p1t3-canjoefish/1-fish-2-fish-red-fish-joe-fish"
                title="GitHub"
                className="repoLink"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </button>
          </section>
        </div>
      </section>
    </>
  );
}
