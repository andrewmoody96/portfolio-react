import React from "react";
import headshot from "../images/moodyHead.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="flex flex-row justify-between">
        <img
          id="moody-headshot"
          src={headshot}
          alt="Andrew Moody."
          className="h-[30vh] rounded-full m-5"
        />
        <div className="flex flex-col justify-evenly">
          <div id="animationContainer" className="console-container m-5">
            <span id="text"></span>
            <div className="console-underscore" id="console">
              &#95;
            </div>
          </div>
          <div className="buttons">
            <button className="homeButtons m-2 rounded-md bg-red-300">
              <Link className="p-2" to={"/projects"}>
                What I'm Working On
              </Link>
            </button>
            <button className="homeButtons m-2">
              <a
                href="https://github.com/andrewmoody96"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github fa-2xl"></i>
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
