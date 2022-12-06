import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spotify from "../images/spotifyicon.eps";
import apple from "../images/applemusicicon.eps"

export default function Audio({ loggedIn, setLoggedIn }) {
  return (
    <>
      <div className="h-[8vh] w-auto">{/* Dummy Div for Spacing */}</div>
      <section className="m-5">
        <article
          id="audioInfo"
          className="text-md text-center border-b-2 border-[#6C4B5E] text-[#6C4B5E] font-josefin"
        >
          Music is a passion in every sense of the word. I have suffered for it,
          yet it remains as one of the most important things in my life. I am a
          huge gearhead which has translated well into my day job, selling gear
          for{" "}
          <a
            href="https://www.zzounds.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600"
          >
            zZounds.com
          </a>
          . zZounds has been good to me and we offer a great selection of
          equipment for whatever musical task you're taking on. <br></br>
          <br></br>When I'm not selling gear, I play in{" "}
          <a
            href="https://www.chocolateinyourpocket.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600"
          >
            Chocolate In Your Pocket
          </a>{" "}
          and provide audio engineering services to other acts. Below, you'll
          find links to some of my favorite projects I've had the pleasure of
          working on. If you'd like to work together, feel free to use the link
          to send me information about your project.
        </article>
        <div
          id="albumLinks"
          className="grid grid-cols-1 tablet:grid-cols-2 justify-items-center font-josefin"
        >
          <section className="flex flex-col justify-center mt-5">
            Album 1
          </section>
          <section className="flex flex-col justify-center mt-5">
            Album 2
          </section>
          <section className="flex flex-col justify-center mt-5">
            Album 3
          </section>
          <section className="flex flex-col justify-center mt-5">
            Album 4
          </section>
          <section className="flex flex-col justify-center mt-5">
            Album 5
            
          </section>
          <section className="flex flex-col justify-center mt-5">
            Album 6
            <div>
              <img src={spotify} alt="Listen on Spotify"></img>
              <img src={apple} alt="Listen on Apple Music"></img>
            </div>
          </section>
        </div>
        <article id="inquiryLinks" className="mt-5 grid grid-cols-1 tablet:grid-cols-2 justify-items-center font-josefin">
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="https://forms.gle/NvuXLyZbPc2dCxcb7"
              title="Link to Audio Inquiry Form"
              className="text-6xl text-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa fa-music"
                className="hover:text-red-600"
              />
              <p className="mt-1 text-lg text-center">
                Audio Engineering Inquiry
              </p>
            </a>
          </h4>
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="https://www.chocolateinyourpocket.com/connect"
              title="Link to CIYP Booking"
              className="text-6xl text-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-guitar"
                className="hover:text-red-600"
              />
              <p className="mt-1 text-lg text-center">
                Book Chocolate In Your Pocket
              </p>
            </a>
          </h4>
        </article>
      </section>
    </>
  );
}
