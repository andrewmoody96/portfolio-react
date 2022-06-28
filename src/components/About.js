import React from "react";

// Here we destructure our props into their own distinct variables
export default function About({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      <section id="aboutme-id" className="aboutme">
        <div id="animationContainer" className="console-container">
          <span id="text"></span>
          <div className="console-underscore" id="console">
            &#95;
          </div>
        </div>
        <article id="aboutme-article">
          <img
            id="moody-headshot"
            src="./Assets/Images/Moody-Headshot.jpg"
            alt="Andrew Moody."
          />
          <p id="aboutmeText">
            I am an audio engineer and a web developer in training. I am
            currently attending Northwestern University's Full Stack Bootcamp to
            gain skills as a web developer. <br />
            <br />
            In 2019, I graduated from Millikin University with a degree in
            music. I am an avid football fan, I like 72° days with a light
            breeze, and enjoy walking aimlessly throughout Chicago.
          </p>
        </article>
        <p id="aboutmeCTA">Check out my work below!</p>
      </section>
    </div>
  );
}
