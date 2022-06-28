import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Navbar({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      <header>
      <a href="/"><h1>Andrew Moody</h1></a>
      <nav>
        <a href="/about" rel='noreferrer'>About Me</a>
        <a href="/projects" rel='noreferrer'>Projects</a>
        <a href="/contact" rel='noreferrer'>Contact Me</a>
      </nav>
    </header>
    </div>
  );
}
