import React from "react";
import image from "../assets/carrousel-background.png";

export default function Carrousel() {
  return (
    <div
      className="w-full h-[420px] pb-12 max-[700px]:pt-12"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex align-middle items-center">
        <button
          id="leftButton"
          className="max-[700px]:hidden  focus:bg-white  focus:bg-opacity-25 delay-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-[420px] text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="h-[320px] w-5/6 mx-[4vw] shadow-2xl shadow-white rounded-[60px] max-[700px]:w-full">
          {/* Carrousel Content */}
        </div>
        <button
          id="rigthButton"
          className="max-[700px]:hidden  focus:bg-white  focus:bg-opacity-25 delay-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-[420px] text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      {/* <div className="justify-center flex mt-2 gap-2">
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
      </div> */}
    </div>
  );
}
