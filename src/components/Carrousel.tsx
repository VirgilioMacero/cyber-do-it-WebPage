import React from "react";
import image from "../assets/carrousel-background.png";

export default function Carrousel() {
  return (
    <div
      className="w-full h-[420px] py-12 "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex align-middle items-center">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-16 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </a>

        <div className="h-[320px] w-5/6 mx-[4vw]  shadow-2xl shadow-white rounded-[60px]">
          {/* Carrousel Content */}
        </div>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-16 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
      <div className="justify-center flex mt-2 gap-2">
        <a href="">
          <div className="rounded-xl w-6 bg-black h-2"></div>
        </a>
        <a href="">
          <div className="rounded-xl w-2 bg-black h-2"></div>
        </a>
        <a href="">
          <div className="rounded-xl w-2 bg-black h-2"></div>
        </a>
        <a href="">
          <div className="rounded-xl w-2 bg-black h-2"></div>
        </a>
      </div>
    </div>
  );
}
