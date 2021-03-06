import React from "react";
import background from "../images/background.jpg";

// Here we destructure our props into their own distinct variables
export default function Contact({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log("Welcome -> loggedIn", loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: `center`,
      }}
    >
      Contact Me
    </div>
  );
}
