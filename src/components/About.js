import React from "react";
import moodyMusic from "../images/moodyMusic.png";
import moodyCandid from "../images/moodyCandid.jpeg";
import background from "../images/background.jpg";
// Here we destructure our props into their own distinct variables
export default function About({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      <section
        id="aboutme-id"
        className="aboutme"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: `center`,
        }}
      >
        <article id="aboutme-article">
          <div className="aboutTextContainer">
            <img id="moody-music" src={moodyMusic} alt="Andrew Moody." />
            <p className="aboutmeText">
              I am an audio engineer and a web developer in training. I am
              currently attending Northwestern University's Full Stack Bootcamp to
              gain skills as a web developer.
            </p>
          </div>
          <div className="aboutTextContainer">
            <p className="aboutmeText">
              In 2019, I graduated from Millikin University with a degree in
              music. I am an avid football fan, I like 72° days with a light
              breeze, and enjoy walking aimlessly throughout Chicago.
            </p>
            <img id="moody-candid" src={moodyCandid} alt="Andrew Moody." />
          </div>
        </article>
      </section>
    </div>
  );
}
