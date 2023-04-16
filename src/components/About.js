import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <Link
        to="/"
        className="mt-5 text-center text-[#FCF2E2] bg-[#6C4B5E] font-josefin w-[17vw] rounded-md text-sm p-2 hover:text-red-600 hover:bg-[#6C4B5E]/50"
      >
        go back
      </Link>
      <div className="h-[8vh] w-auto">{/* Dummy Div for Spacing */}</div>
      <article
        id="aboutme-article"
        className="text-center text-[#6C4B5E] w-[80vw] font-josefin flex flex-col justify-center items-center"
      >
        <div>
          <p className="m-3">
            I am a musician, audio engineer, & full-stack web developer. I
            completed my certification in the MERN stack in the summer of 2022
            through Northwestern University. In 2019, I graduated from Millikin
            University with a degree in music and have continued to work on
            projects as a bandmate in{" "}
            <a
              href="https://www.chocolateinyourpocket.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600"
            >
              Chocolate In Your Pocket
            </a>
            , and as a freelance engineer. I am an avid football fan, I like 72°
            days with a light breeze, and enjoy walking aimlessly throughout
            Chicago to find cool, new spots for food, drinks, or other fun.{" "}
            <br></br>
            <br></br>I am currently seeking a job as a developer to kick off my
            career in web development. Check out my resume using the link at the
            bottom of this page, or send me an email if you have a project you
            think I can help with.
          </p>
        </div>
      </article>
    </div>
  );
}
