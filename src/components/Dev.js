import React, { useRef, useState } from "react"; // eslint-disable-line
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import { Link } from "react-router-dom";
import CIYPcapture from "../images/CIYPcapture.jpg";
import fullyBooked from "../images/fullyBooked.png";
import fishAppCapture from "../images/fishAppCapture.png";

export default function Dev() {
  return (
    <div className="flex flex-col items-center">
      <Link
        to="/"
        className="mt-5 text-center text-[#FCF2E2] bg-[#6C4B5E] font-josefin w-[17vw] rounded-md text-sm p-2 hover:text-red-600 hover:bg-[#6C4B5E]/50"
      >
        go back
      </Link>
      <div className="h-[3vh] w-auto ">{/* Dummy Div for Spacing */}</div>
      <section className="mx-5">
        <article
          id="devInfo"
          className="mx-4 text-md text-center border-b-2 border-[#6C4B5E] text-[#6C4B5E] font-josefin"
        >
          Development plays to many of my interests. I'm a geek who likes to
          know how to make things work, I think computers are incredibly
          fascinating, and I am definitely a creative. All 3 of these traits go
          a long way when designing a web application. <br></br>
          <br></br>So far, I have created a website for my band, and I'm
          continuing to develop my professional portfolio with other projects.
          Click the app images to check them out.
          <div className="h-[2vh] w-auto">{/* Dummy Div for Spacing */}</div>
        </article>
        <section className="flex flex-col">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="max-w-[100vw] drop-shadow-[0_30px_25px_rgba(108,75,94,21)]"
          >
            <SwiperSlide className="">
              <div className="card mt-4 font-josefin text-center">
                <h2 className="m-2 text-2xl font-audiowide text-[#6C4B5E] font-bold">
                  Chocolate In Your Pocket
                </h2>
                <h6 className="app-description mx-4 my-2">
                  My band's website. View upcoming shows and join our mailing
                  list.
                </h6>
                <a
                  href="https://www.chocolateinyourpocket.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="">
                    <img
                      id="featuredapp-pic"
                      src={CIYPcapture}
                      alt="Featured web application."
                      className="max-h-[50vh] m-auto w-auto rounded-md tablet:drop-shadow-[0_30px_10px_rgba(108,75,94,1)] border-4 border-[#6C4B5E]"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mt-4 font-josefin text-center">
                <h2 className="m-2 text-2xl font-audiowide text-[#6C4B5E] font-bold">
                  Fully Booked
                </h2>
                <h6 className="app-description mx-4 my-2">
                  Community Library Browser
                </h6>
                <a
                  href="https://fully-booked-2022.herokuapp.com/libraryinfo/4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <img
                      id="featuredapp-pic"
                      src={fullyBooked}
                      alt="Featured web application."
                      className="max-h-[50vh] m-auto w-auto rounded-md tablet:drop-shadow-[0_30px_10px_rgba(108,75,94,1)] border-4 border-[#6C4B5E]"
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mt-4 font-josefin text-center">
                <h2 className="text-2xl font-audiowide text-[#6C4B5E] font-bold m-2">
                  One Fish, Two Fish, Red Fish, Go Fish?
                </h2>
                <h6 className="text-md m-2">
                  An application to help ocean fishers find information on
                  species and weather at their location.
                </h6>
                <a
                  href="https://andrewmoody96.github.io/1-fish-2-fish-red-fish-joe-fish/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="max-h-[50vh] m-auto w-auto rounded-md tablet:drop-shadow-[0_30px_10px_rgba(108,75,94,1)] border-4 border-[#6C4B5E]"
                      src={fishAppCapture}
                      alt="Web application."
                    />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </div>
  );
}
