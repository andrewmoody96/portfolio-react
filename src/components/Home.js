import React, { useState } from "react";
import headshot from "../images/moodyHead.jpeg";
import Audio from "./Audio";
import Dev from "./Dev";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  const [view, setView] = useState("default");

  function renderView() {
    if (view === "default") {
      return (
        <>
          <section className="flex flex-col justify-center items-center">
            <img
              id="moody-headshot"
              src={headshot}
              alt="Andrew Moody."
              className="w-[45vw] max-w-[1000px] rounded-full m-5 tablet:w-[25vw] border-4 border-[#6C4B5E] border-double drop-shadow-[0_35px_35px_rgba(108,75,94,0.25)]"
            />
            <div className="flex flex-col justify-center rounded-md">
              {/* <div id="animationContainer" className="console-container m-5">
                <span id="text"></span>
              <div className="console-underscore" id="console">
              &#95;
              </div>
              </div> */}
              <article className="m-5">
                <p className="mx-5 my-2 text-3xl tablet:text-4xl font-josefin text-center text-[#6C4B5E]">
                  Musician, Audio Engineer, & Full-Stack Developer
                </p>
              </article>
              <div className="flex flex-col tablet:flex-row justify-center items-center text-sm">
                <button
                  onClick={() => setView("audio")}
                  className="p-1 text-[#FCF2E2] m-2 rounded-md bg-[#6C4B5E] flex justify-center items-center w-[33vw] tablet:w-[18vw] drop-shadow-[0_20px_40px_rgba(108,75,94,0.15)] font-josefin hover:text-red-600 hover:bg-[#6C4B5E]/50"
                >
                  <i className="my-5 ml-5 fa fa-music fa-2xl "></i>
                  <p className="m-2">Music</p>
                </button>
                <button
                  onClick={() => setView("development")}
                  className="p-1 text-[#FCF2E2] m-2 rounded-md bg-[#6C4B5E] flex justify-center items-center w-[33vw] tablet:w-[18vw] drop-shadow-[0_20px_40px_rgba(108,75,94,0.15)] font-josefin hover:text-red-600 hover:bg-[#6C4B5E]/50"
                >
                  <i className="my-5 ml-5 fa fa-code-branch fa-2xl "></i>
                  <p className="m-2">Development</p>
                </button>
                <button className="p-1 text-[#FCF2E2] m-2 rounded-md bg-[#6C4B5E] flex justify-center items-center w-[33vw] tablet:w-[18vw] drop-shadow-[0_20px_40px_rgba(108,75,94,0.15)] font-josefin hover:text-red-600 hover:bg-[#6C4B5E]/50">
                  <a
                    href="https://github.com/andrewmoody96"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row justify-center items-center"
                  >
                    <i className="my-5 ml-5 fa fa-github fa-2xl "></i>
                    <p className="m-2">GitHub</p>
                  </a>
                </button>
                <button
                  onClick={() => setView("about")}
                  className="p-1 text-[#FCF2E2] m-2 rounded-md bg-[#6C4B5E] flex justify-center items-center w-[33vw] tablet:w-[18vw] drop-shadow-[0_20px_40px_rgba(108,75,94,0.15)] font-josefin hover:text-red-600 hover:bg-[#6C4B5E]/50"
                >
                  <i className="my-5 ml-5 fa fa-person fa-2xl "></i>
                  <p className="m-2">About Me</p>
                </button>
                <button
                  onClick={() => setView("contact")}
                  className="p-1 text-[#FCF2E2] m-2 rounded-md bg-[#6C4B5E] flex justify-center items-center w-[33vw] tablet:w-[18vw] drop-shadow-[0_20px_40px_rgba(108,75,94,0.15)] font-josefin hover:text-red-600 hover:bg-[#6C4B5E]/50"
                >
                  <i className="my-5 ml-5 fa fa-comments fa-2xl "></i>
                  <p className="m-1">Get In Touch</p>
                </button>
              </div>
            </div>
          </section>
        </>
      );
    } else if (view === "audio") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setView("default")}
            className="mt-5 text-center text-[#FCF2E2] bg-[#6C4B5E] font-josefin w-[17vw] rounded-md text-sm p-2 hover:text-red-600 hover:bg-[#6C4B5E]/50"
          >
            go back
          </button>
          <Audio />
        </div>
      );
    } else if (view === "development") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setView("default")}
            className="mt-5 text-center text-[#FCF2E2] bg-[#6C4B5E] font-josefin w-[17vw] rounded-md text-sm p-2 hover:text-red-600 hover:bg-[#6C4B5E]/50"
          >
            go back
          </button>
          <Dev />
        </div>
      );
    } else if (view === "about") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setView("default")}
            className="mt-5 text-center text-[#FCF2E2] bg-[#6C4B5E] font-josefin w-[17vw] rounded-md text-sm p-2 hover:text-red-600 hover:bg-[#6C4B5E]/50"
          >
            go back
          </button>
          <About />
        </div>
      );
    } else if (view === "contact") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setView("default")}
            className="mt-5 text-center text-[#FCF2E2] bg-[#6C4B5E] font-josefin w-[17vw] rounded-md text-sm p-2 hover:text-red-600 hover:bg-[#6C4B5E]/50"
          >
            go back
          </button>
          <Contact />
        </div>
      );
    }
  }

  return <div>{renderView()}</div>;
}


// add button shadows
// add image shadows