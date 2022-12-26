import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="mt-10 relative bottom-0 left-0 right-0 mb-10 text-[#6C4B5E]">
      <div className="flex flex-row justify-center text-lg">
        <h4 className="m-2">
          <a
            href="https://www.linkedin.com/in/andrew-moody-919a42165/"
            title="Linkedin"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" className="hover:text-red-600"/>
          </a>
        </h4>
        <h4 className="m-2">
          <a
            href="mailto:andrew.moody96@gmail.com"
            title="Email"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-regular fa-envelope" className="hover:text-red-600"/>
          </a>
        </h4>
        <h4 className="m-2">
          <a
            href="https://github.com/andrewmoody96"
            title="GitHub"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" className="hover:text-red-600"/>
          </a>
        </h4>
        <h4 className="m-2">
          <a
            href="https://www.instagram.com/andrew.moody96/?hl=en"
            title="Link to Instagram"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-instagram" className="hover:text-red-600"/>
          </a>
        </h4>
        <h4 className="m-2">
          <a
            href="https://drive.google.com/file/d/1bMVtxtkZHoKMJAZ7yIO2Xm95tyJQ_bUU/view?usp=sharing"
            title="Resume"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-regular fa-file-lines" className="hover:text-red-600"/>
          </a>
        </h4>
      </div>
      <div>
        <p className="text-center text-xs font-josefin">&copy; 2022 Andrew Moody</p>
      </div>
    </footer>
  );
}

export default Footer;
