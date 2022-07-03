import React, { useState } from "react";
import fullyBookedCapture from "../images/fullyBookedCapture.png"
import MoreProjects from "./MoreProjects.js"
// Here we destructure our props into their own distinct variables
export default function Projects() {
  const [currentView, setView] = useState("featured");
  const renderView = () => {
    if (currentView !== "featured") {
      return (
        <section id="work-id" className="work">
          
          <>
          {" "}
              <button
                id="featuredApp-btn"
                className="btn btn-sm btn-info mx-2"
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
      <section id="work-id" className="work">
        <p className="project-instructions">
          Click on the image to view the application.
        </p>
        {/* <p className="project-instructions">
          To see additional apps, click "Show Me More".
        </p> */}
        <div id="featured-app">
          {/* Card with embedded link to application. */}
          <div className="card">
            <a
              href="https://fully-booked-2022.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Fully Booked</h3>
              <h6 className="app-description">
                View, create, and manage community libraries.
              </h6>
              {/* <h4></h4> */}
              <img
                id="featuredapp-pic"
                src={fullyBookedCapture}
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
        <button
              id="moreApps"
              className="btn btn-sm btn-info mx-2"
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


