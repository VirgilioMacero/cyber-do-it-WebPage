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
      className="p-2 items-center text-center rounded-3xl  px-6 shadow-xl hover:border-2 border-[#471080]"
    >
      {title}
    </a>
  );
}
