import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spotify from "../images/spotifylogo.png";
import apple from "../images/applemusiclogo.svg";

// album photos
import kingdomsFall from "../images/kingdomsFall.png";
import deepDeepDreamer from "../images/deepDeepDreamer.png";
import adonisCover from "../images/adonisReimagined.jpeg";
import guestBedroom from "../images/guestBedroom.jpeg";
import ppp from "../images/puffPuffPoseidon.jpeg";
import bagatelles from "../images/bagatelles.jpeg";
import qulture from "../images/qulture.jpeg";
import dieTrying from "../images/dieTrying.jpeg";

export default function Audio() {
  return (
    <div className="flex flex-col items-center">
      <Link
        to="/"
        className="mt-5 text-center text-[#FCF2E2] bg-[#6C4B5E] font-josefin w-[17vw] rounded-md text-sm p-2 hover:text-red-600 hover:bg-[#6C4B5E]/50"
      >
        go back
      </Link>
      <div className="h-[3vh] w-auto ">{/* Dummy Div for Spacing */}</div>

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
          .<br></br>
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
          className="grid grid-cols-1 tablet:grid-cols-2 justify-items-center font-josefin text-lg"
        >
          <section className="flex flex-col justify-center mt-5 mx-2 border-b-2 border-[#6C4B5E] tablet:border-0">
            <h3 className="text-center mb-2">WLDFRE</h3>
            <img
              src={kingdomsFall}
              alt="Kingdoms Fall by WLDFRE"
              className="rounded-lg"
            ></img>
            <div className="flex flex-row justify-evenly my-5">
              <a
                href="https://open.spotify.com/track/0eJAOH7THQK8U4OtkGsMkg?si=4fb0fabea78f484e"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Listen on Spotify"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
              <a
                href="https://music.apple.com/us/album/kingdoms-fall/1665513920?i=1665513921"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apple}
                  alt="Listen on Apple Music"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
            </div>
          </section>
          <section className="flex flex-col justify-center mt-5 mx-2 border-b-2 border-[#6C4B5E] tablet:border-0">
            <h3 className="text-center mb-2">Lennie Quest</h3>
            <img
              src={deepDeepDreamer}
              alt="DEEP DEEP DREAMER by Lennie Quest"
              className="rounded-lg"
            ></img>
            <div className="flex flex-row justify-evenly my-5">
              <a
                href="https://open.spotify.com/album/2rCu6bDo7WXY7x6lpiGY3m?si=ocr9q9xnQiG5StFspEz5-g"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Listen on Spotify"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
              <a
                href="https://music.apple.com/us/album/deep-deep-dreamer/1661539885"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apple}
                  alt="Listen on Apple Music"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
            </div>
          </section>
          <section className="flex flex-col justify-center mt-5 mx-2 mb-2 border-b-2 border-[#6C4B5E] tablet:border-0">
            <h3 className="text-center mb-2">Tommy Bravos</h3>
            <img
              src={adonisCover}
              alt="Romeo (Moistbreezy Remix) by Tommy Bravos"
              className="rounded-lg"
            ></img>
            <div className="flex flex-row justify-evenly my-5">
              <a
                href="https://open.spotify.com/track/45bAzbMA5bbwz1v8D4cHqt?si=2eb32d461ef94f2b"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Listen on Spotify"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
              <a
                href="https://music.apple.com/us/album/romeo-moistbreezy-remix/1628818726?i=1628818729"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apple}
                  alt="Listen on Apple Music"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
            </div>
          </section>
          <section className="flex flex-col justify-center mt-5 mx-2 border-b-2 border-[#6C4B5E] tablet:border-0">
            <h3 className="text-center mb-2">Alex Erickson</h3>
            <img
              src={guestBedroom}
              alt="1912 by Alex Erickson"
              className="rounded-lg"
            ></img>
            <div className="flex flex-row justify-evenly my-5">
              <a
                href="https://open.spotify.com/track/44cpvzVHyk05c2AaECEHN1?si=5bfb7c87eb8149c2"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Listen on Spotify"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
              <a
                href="https://music.apple.com/us/album/1912/1618948000?i=1618948004"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apple}
                  alt="Listen on Apple Music"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
            </div>
          </section>
          <section className="flex flex-col justify-center mt-5 mx-2 border-b-2 border-[#6C4B5E] tablet:border-0">
            <h3 className="text-center mb-2">Puff Puff Poseidon</h3>
            <img
              src={ppp}
              alt="Percussion Sexuals by Puff Puff Poseidon"
              className="rounded-lg"
            ></img>
            <div className="flex flex-row justify-evenly my-5">
              <a
                href="https://open.spotify.com/track/4btWNC0dYYsqEC2WL53hFC?si=78f3a4ef32a243cb"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Listen on Spotify"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
              <a
                href="https://music.apple.com/us/album/percussion-sexuals/1612520747?i=1612520756"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apple}
                  alt="Listen on Apple Music"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
            </div>
          </section>
          <section className="flex flex-col justify-center mt-5 mx-2 border-b-2 border-[#6C4B5E] tablet:border-0">
            <h3 className="text-center mb-2">Silvan Negrutiu</h3>
            <img
              src={bagatelles}
              alt="6 Bagatelles, Op. 126: No. 3, Andante, cantabile e grazioso performed by Silvan Negrutiu"
              className="rounded-lg"
            ></img>
            <div className="flex flex-row justify-evenly my-5">
              <a
                href="https://open.spotify.com/track/1AqpdLotfB2KmXUiK7RPiy?si=3048a58ce06f4649"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Listen on Spotify"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
              <a
                href="https://music.apple.com/us/album/6-bagatelles-op-126-no-3-andante-cantabile-e-grazioso/1582473154?i=1582473486"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apple}
                  alt="Listen on Apple Music"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
            </div>
          </section>
          <section className="flex flex-col justify-center mt-5 mx-2 border-b-2 border-[#6C4B5E] tablet:border-0">
            <h3 className="text-center mb-2">Xandar</h3>
            <img
              src={qulture}
              alt="Lady Disco by Xandar"
              className="rounded-lg"
            ></img>
            <div className="flex flex-row justify-evenly my-5">
              <a
                href="https://open.spotify.com/track/4AmrRtGbSpBKsfTdRK1BFJ?si=ba5d12454e28493c"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Listen on Spotify"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
              <a
                href="https://music.apple.com/us/album/lady-disco/1619142427?i=1619142429"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apple}
                  alt="Listen on Apple Music"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
            </div>
          </section>
          <section className="flex flex-col justify-center mt-5 mx-2 border-b-2 border-[#6C4B5E] tablet:border-0">
            <h3 className="text-center mb-2">Chocolate In Your Pocket</h3>
            <img
              src={dieTrying}
              alt="Carrie by Chocolate In Your Pocket"
              className="rounded-lg"
            ></img>
            <div className="flex flex-row justify-evenly my-5">
              <a
                href="https://open.spotify.com/track/5kN37s0i2hMoyFiGt7IBn3?si=acf0eb560c05450e"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={spotify}
                  alt="Listen on Spotify"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
              <a
                href="https://music.apple.com/us/album/carrie/1534159639?i=1534159644"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apple}
                  alt="Listen on Apple Music"
                  className="h-[5vh] mx-2"
                ></img>
              </a>
            </div>
          </section>
        </div>
        <article
          id="inquiryLinks"
          className="mt-5 grid grid-cols-1 tablet:grid-cols-2 justify-items-center font-josefin"
        >
          <h4 className="m-3 text-6xl text-center text-[#6C4B5E]">
            <a
              href="https://forms.gle/NvuXLyZbPc2dCxcb7"
              title="Link to Audio Inquiry Form"
              className="text-3xl text-center"
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
              className="text-3xl text-center"
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
      <div className="h-[8vh] w-auto">{/* Dummy Div for Spacing */}</div>
    </div>
  );
}
