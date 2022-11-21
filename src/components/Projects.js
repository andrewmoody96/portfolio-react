import React, { useState } from "react";
import CIYPcapture from "../images/CIYPcapture.jpg";
import MoreProjects from "./MoreProjects.js";

export default function Projects() {
  const [currentView, setView] = useState("featured");
  const renderView = () => {
    if (currentView !== "featured") {
      return (
        <section>
          <>
            {" "}
            <button
              className="m-2 rounded-md bg-red-300 p-1"
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
      <section>
        <p className="project-instructions">
          Click on the image to view the application.
        </p>
        <div id="featured-app">
          <div className="card">
            <a
              href="https://www.chocolateinyourpocket.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Chocolate In Your Pocket</h3>
              <h6 className="app-description">
                My band's website. View upcoming shows and join our mailing
                list.
              </h6>
              <img
                id="featuredapp-pic"
                src={CIYPcapture}
                alt="Featured web application."
              />
            </a>
          </div>
        </div>
        <button
          className="m-2 rounded-md bg-red-300 p-1"
          onClick={() => setView("moreApps")}
        >
          More Apps
        </button>{" "}
      </section>
    );
  };

  const handleViewChange = (view) => setView(view);

  return (
    <div className="container text-center">
      {handleViewChange}
      {renderView()}
    </div>
  );
}
