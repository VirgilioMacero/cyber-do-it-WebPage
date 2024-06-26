export default function LinkButton({
  name = "Button",
  link = "",
  className = "",
}: {
  name: string;
  link?: string;
  className?: string;
}) {


  return (
    <a href={link}>
      <p
        style={{
          fontFamily: "Azeret Mono",
        }}
        className={`p-4 rounded-full ${className}`}

      >
        {name}
      </p>
    </a>
  );
}
