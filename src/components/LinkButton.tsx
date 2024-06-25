export default function LinkButton({
  name = "Button",
  link = "",
  bgColor = "#f0f0f0",
  hoverBg = "#4361ED",
  textColor = "#3D2DA2",
  className = "",
}: {
  name?: string;
  link?: string;
  bgColor?: string;
  hoverBg?: string;
  textColor?: string;
  className?: string;
}) {
  function MouseOver(event: any) {
    event.target.style.background = hoverBg;
  }
  function MouseOut(event: any) {
    event.target.style.background = bgColor;
  }

  return (
    <a href={link}>
      <p
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
      </p>
    </a>
  );
}
