import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <Link
        to="/"
        className="mt-5 text-center text-[#FCF2E2] bg-[#6C4B5E] font-josefin w-[17vw] rounded-md text-sm p-2 hover:text-red-600 hover:bg-[#6C4B5E]/50"
      >
        go back
      </Link>
      <article className="flex flex-col items-center justify-center">
        <div className="h-[2vh] w-auto">{/* Dummy Div for Spacing */}</div>

        <p className="text-center font-josefin mt-5 text-[#6C4B5E]">
          Want to get in touch? <br></br> Drop me a line using the links below.
        </p>
        <div className="h-[4vh] w-auto">{/* Dummy Div for Spacing */}</div>

        <div className="my-10 grid grid-cols-2 font-josefin">
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="https://www.linkedin.com/in/andrew-moody-919a42165/"
              title="Linkedin"
              className="text-6xl text-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                className="hover:text-red-600"
              />
              <p className="mt-1 text-xl text-center">LinkedIn</p>
            </a>
          </h4>
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="mailto:andrew.moody96@gmail.com"
              title="Email"
              className="text-6xl text-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-regular fa-envelope"
                className="hover:text-red-600"
              />
              <p className="mt-1 text-xl text-center">Email</p>
            </a>
          </h4>
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="https://www.instagram.com/andrew.moody96/?hl=en"
              title="Link to Instagram"
              className="text-6xl text-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className="hover:text-red-600"
              />
              <p className="mt-1 text-xl text-center">Instagram</p>
            </a>
          </h4>
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="https://drive.google.com/file/d/1bMVtxtkZHoKMJAZ7yIO2Xm95tyJQ_bUU/view?usp=sharing"
              title="Resume"
              className="text-6xl text-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-regular fa-file-lines"
                className="hover:text-red-600"
              />
              <p className="mt-1 text-xl text-center">Resume</p>
            </a>
          </h4>
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="https://forms.gle/NvuXLyZbPc2dCxcb7"
              title="Link to Engineering Inquiry Form"
              className="text-6xl text-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa fa-music"
                className="hover:text-red-600"
              />
              <p className="mt-1 text-xl text-center">
                Audio Engineering Inquiry
              </p>
            </a>
          </h4>
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="https://www.instagram.com/chocolateinyourpocket/?hl=en"
              title="Link to Instagram"
              className="text-6xl text-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                className="hover:text-red-600"
              />
              <p className="mt-1 text-xl text-center">CIYP Instagram</p>
            </a>
          </h4>
        </div>
      </article>
    </div>
  );
}
