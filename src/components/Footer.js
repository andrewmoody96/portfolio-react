import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Here we destructure our props into their own distinct variables
export default function Footer({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log("Welcome -> loggedIn", loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div id="footer" className="contactme">
      <section id="contactme-id" className="">
        <div>
          <p>Contact Me</p>
        </div>
        <div id="contactOptions">
          <h4>
            <a
              href="https://www.linkedin.com/in/andrew-moody-919a42165/"
              title="Linkedin"
              className="fa-brands fa-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
          </h4>
          <h4>
            <a
              href="mailto:andrew.moody96@gmail.com"
              title="Email"
              className="fa-regular fa-envelope"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-regular fa-envelope" />
            </a>
          </h4>
          <h4>
            <a
              href="https://github.com/andrewmoody96"
              title="GitHub"
              className="fa-brands fa-github"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </h4>
          <h4>
            <a
              href="https://www.instagram.com/andrew.moody96/?hl=en"
              title="Link to Instagram"
              className="fa fa-instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
          </h4>
          <h4>
            <a
              href="https://drive.google.com/file/d/1J_ZnJqZ0I5vxtc0kahWnr1Fmw4aYXvo-/view?usp=sharing"
              title="Resume"
              className="fa-solid fa-file-lines"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-regular fa-file-lines" />
            </a>
          </h4>
        </div>
        <div>
          <p>&copy; 2022 Created by Andrew Moody</p>
        </div>
      </section>
    </div>
  );
}
