import React from "react";

export default function Address() {
  return (
    <div
      style={{ backgroundColor: "#D9D9D9" }}
      className="grid grid-cols-2 p-10 py-20 max-[700px]:grid-cols-1 max-[700px]:gap-4"
    >
      <div className="" style={{ fontFamily: "Azeret Mono" }}>
        <h1 className="text-5xl pb-5">Our Location</h1>
        <a
          href=""
          className="hover:underline decoration-[#3D2DA2] decoration-2"
        >
          <p>11561 NW 76th St</p>
          <p>Florida Medley</p>
        </a>
        <p className="max-[700px]:hidden">--------------------{">"}</p>
      </div>
      <div className="rounded-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.8141565903293!2d-80.38766502474289!3d25.84266847730121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bc6bad61b86f%3A0x9d91539930a6517d!2s11561%20NW%2076th%20St%2C%20Medley%2C%20FL%2033178!5e0!3m2!1ses!2sus!4v1709334234212!5m2!1ses!2sus"
          width="100%"
          height="450"
          style={{ border: "3px #3D2DA2 solid" }}
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
      </div>
    </div>
  );
}
