import React from "react";

export default function HeaderButton({
  title = "Title",
  url = "",
}: {
  title: string;
  url: string;
}) {
  return (
    <a
      href={url}
      className="p-2 items-center text-center rounded-3xl  px-6 shadow-xl  hover:shadow-inner hover:bg-[#471080] hover:text-white hover:shadow-black"
    >
      {title}
    </a>
  );
}
