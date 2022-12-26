import React, { useState } from "react";
import CIYPcapture from "../images/CIYPcapture.jpg";
import MoreProjects from "./MoreProjects.js";

export default function Dev() {
  const [currentView, setView] = useState("featured");
  const renderView = () => {
    if (currentView !== "featured") {
      return (
        <section className="font-josefin">
          <>
            <MoreProjects />{" "}
            <div className="h-[8vh] w-auto">{/* Dummy Div for Spacing */}</div>
            <button
              className="m-2 rounded-md bg-[#6C4B5E] p-2 place-self-center text-[#FCF2E2] hover:text-red-600 hover:bg-[#6C4B5E]/50"
              onClick={() => setView("featured")}
            >
              Featured App
            </button>{" "}
          </>
        </section>
      );
    } else
      return (
        <section className="font-josefin mx-2 flex flex-col justify-center items-center">
          <p className="text-xl border-b-2 border-[#6C4B5E] text-[#6C4B5E]">
            Click an image to view the app.
          </p>
          <div id="featured-app" className="mt-5">
            <div className="card">
              <a
                href="https://www.chocolateinyourpocket.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="text-left text-2xl font-audiowide text-[#6C4B5E] font-bold">
                  Chocolate In Your Pocket
                </h2>
                <h6 className="app-description m-2">
                  My band's website. View upcoming shows and join our mailing
                  list.
                </h6>
                <div>
                  <img
                    id="featuredapp-pic"
                    src={CIYPcapture}
                    alt="Featured web application."
                    className="max-h-[50vh] m-auto w-auto rounded-md drop-shadow-[0_35px_35px_rgba(108,75,94,0.25)]"
                  />
                </div>
              </a>
            </div>
          </div>
          <button
            className="my-5 mx-2 rounded-md bg-[#6C4B5E] text-[#FCF2E2] p-1 hover:text-red-600 hover:bg-[#6C4B5E]/50"
            onClick={() => setView("moreApps")}
          >
            More
          </button>{" "}
        </section>
      );
  };

  const handleViewChange = (view) => setView(view);

  return (
    <div className="container text-center">
      {handleViewChange}
      <div className="h-[6vh] w-auto">{/* Dummy Div for Spacing */}</div>
      {renderView()}
    </div>
  );
}
