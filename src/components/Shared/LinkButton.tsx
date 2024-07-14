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
    <a href={link} className={`p-4  ${className}`}>
      <p>{name}</p>
    </a>
  );
}
