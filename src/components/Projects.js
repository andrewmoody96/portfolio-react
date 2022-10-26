import React, { useState } from "react";
import fullyBookedCapture from "../images/fullyBookedCapture.png";
import MoreProjects from "./MoreProjects.js";
import background from "../images/background.jpg";

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
              href="https://www.chocolateinyourpocket.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Fully Booked</h3>
              <h5>Fully Booked</h5>
              <h6 className="app-description">
                My band's website. View upcoming shows and join our mailing list.
              </h6>
              {/* UPDATE PIC */}
              <img
                id="featuredapp-pic"
                // src={fullyBookedCapture}
                alt="Featured web application."
              />
            </a>
            <button className="repoButtons">
              <a
                href="https://github.com/andrewmoody96/ciyp"
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
          className="projectButtons"
          onClick={() => setView("moreApps")}
        >
          More Apps
        </button>{" "}
      </section>
    );
  };

  const handleViewChange = (view) => setView(view);

  return (
    <main className="flex-row justify-center mb-4">
      <div className="container text-center">
        {handleViewChange}
        {renderView()}
      </div>
    </main>
  );
}
