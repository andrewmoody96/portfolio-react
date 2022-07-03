import React from "react";

// Here we destructure our props into their own distinct variables
export default function MoreProjects({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
        <div id="other-app">
          <div className="card">
            <a
              href="https://andrewmoody96.github.io/1-fish-2-fish-red-fish-joe-fish/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>One Fish, Two Fish, Red Fish, Go Fish?</h3>
              <h6 className="app-description">
                An application to help ocean fishers find information on species
                and weather for the location they'll be fishing at.
              </h6>
              <img
                className="other-app-pic"
                src="./Assets/Images/oneFishTwoFishRedFishGoFish.png"
                alt="Web application."
              />
            </a>
            <a
              href="https://github.com/andrewmoody96/1-fish-2-fish-red-fish-joe-fish"
              title="GitHub"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
          <div className="card">
            <a
              href="https://andrewmoody96.github.io/moody-hw6-WeatherDashboard/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Weather Dashboard</h3>
              <h6 className="app-description">
                An app to show users weather data based on the city they input.
              </h6>
              <img
                className="other-app-pic"
                src="./Assets/Images/weather-pic.png"
                alt="Web application."
              />
            </a>
            <a
              href="https://github.com/andrewmoody96/1-fish-2-fish-red-fish-joe-fish"
              title="GitHub"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
          <div className="card">
            <a
              href="https://andrewmoody96.github.io/chocolateinyourpocket/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Chocolate In Your Pocket</h3>
              <h6>Homepage for my band. A work in progress.</h6>
              <img
                className="other-app-pic"
                src="./Assets/Images/CIYP Website Pic.png"
                alt="Web application."
              />
            </a>
            <a
              href="https://github.com/andrewmoody96/1-fish-2-fish-red-fish-joe-fish"
              title="GitHub"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
    </div>
  );
}
