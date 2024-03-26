import { MouseEventHandler } from "react";

export default function Button({
  name = "Button",
  onClick = () => {},
  bgColor = "#f0f0f0",
  hoverBg = "#4361ED",
  textColor = "#3D2DA2",
  className = "",
}: {
  name: string;
  onClick: MouseEventHandler;
  bgColor: string;
  hoverBg: string;
  textColor: string;
  className: string;
}) {
  function MouseOver(event: any) {
    event.target.style.background = hoverBg;
  }
  function MouseOut(event: any) {
    event.target.style.background = bgColor;
  }

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: "Azeret Mono",
      }}
      className={`p-4 rounded-full ${className}`}
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
    >
      {name}
    </button>
  );
}
