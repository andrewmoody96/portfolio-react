import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <section>
      <div>
        <p className="text-center">Contact Me</p>
      </div>
      <div className="flex flew-row justify-center">
        <h4 className="m-2">
          <a
            href="https://www.linkedin.com/in/andrew-moody-919a42165/"
            title="Linkedin"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
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
            <FontAwesomeIcon icon="fa-regular fa-envelope" />
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
            <FontAwesomeIcon icon="fa-brands fa-github" />
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
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
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
            <FontAwesomeIcon icon="fa-regular fa-file-lines" />
          </a>
        </h4>
      </div>
      <div>
        <p className="text-center">&copy; 2022 Andrew Moody</p>
      </div>
    </section>
  );
}

export default Footer;
