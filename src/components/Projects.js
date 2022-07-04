import React, { useState } from "react";
import fullyBookedCapture from "../images/fullyBookedCapture.png";
import MoreProjects from "./MoreProjects.js";
import background from "../images/background.jpg";
// Here we destructure our props into their own distinct variables
export default function Projects() {
  const [currentView, setView] = useState("featured");
  const renderView = () => {
    if (currentView !== "featured") {
      return (
        <section
          id="work-id"
          className="work"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: `center`,
          }}
        >
          <>
            {" "}
            <button
              // id="featuredApp-btn"
              className="projectButtons"
              onClick={() => setView("featured")}
            >
              Featured App
            </button>{" "}
            <>
              <MoreProjects />
            </>
          </>
        </section>
      );
    }
    return (
      <section
        id="work-id"
        className="work"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: `center`,
        }}
      >
        <p className="project-instructions">
          Click on the image to view the application.
        </p>
        <div id="featured-app">
          {/* Card with embedded link to application. */}
          <div className="card">
            <a
              href="https://fully-booked-2022.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Fully Booked</h3>
              <h5>Fully Booked</h5>
              <h6 className="app-description">
                View, create, and manage community libraries.
              </h6>
              <img
                id="featuredapp-pic"
                src={fullyBookedCapture}
                alt="Featured web application."
              />
            </a>
            {/* Link to project Repo */}
            <button className="repoButtons">
              <a
                href="https://github.com/andrewmoody96/Fully-Booked"
                title="GitHub"
                className="repoLink"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </button>
          </div>
        </div>
        <button
          // id="moreApps"
          className="projectButtons"
          onClick={() => setView("moreApps")}
        >
          More Apps
        </button>{" "}
      </section>
    );
  };

  const handleViewChange = (view) => setView(view);

  // conditionally render loginForm or signupForm
  return (
    <main className="flex-row justify-center mb-4">
      <div className="container text-center">
        {handleViewChange}
        {renderView()}
      </div>
    </main>
  );
}
