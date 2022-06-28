import React from "react";

// Here we destructure our props into their own distinct variables
export default function Projects({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      <section id="work-id" className="work">
        <h2 id="h2-work">Featured App</h2>
        <p id="work-article">
          Click on the image to view the application. To see additional apps,
          click "Show Me More".
        </p>
        <div id="featured-app">
          {/* Card with embedded link to application. */}
          <div className="card">
            <a
              href="https://fully-booked-2022.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Fully Booked</h2>
              <h6 className="app-description">
                Allows users to view, create, and manage community libraries.
                Login to check out books.
              </h6>
              <h4></h4>
              <img
                id="featuredapp-pic"
                src="./Assets/Images/FullyBooked-capture.png"
                alt="Featured web application."
              />
            </a>
            {/* Link to project Repo */}
            <a
              href="https://github.com/andrewmoody96/Fully-Booked"
              title="GitHub"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
        <button id="moreApps">Show Me More</button>
      </section>
    </div>
  );
}
