import React from "react";

export default function Footer() {
  return (
    <div className="h-[220px] w-full">
      <div className="flex flex-row-reverse  mt-10">
        <div
          className="grid grid-cols-2 gap-10 max-[700px]:grid-cols-1"
          style={{ fontFamily: "Azeret Mono" }}
        >
          <div className="mb-4">
            <h1 className="mb-4 text-2xl">Costumer Service</h1>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>FAQ</p>
          </div>
          <div className="mb-4">
            <h1 className="mb-4 text-2xl">Legal</h1>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Site Map</p>
          </div>
        </div>
      </div>
    </div>
  );
}
