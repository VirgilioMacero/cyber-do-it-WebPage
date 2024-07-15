import design from "../Styles/Card.module.css";

export default function Card({
  id = 0,
  title = "Test",
  description = "Test description",
  price = 0,
  className = "",
}: {
  id: number;
  title: string;
  description: string;
  price?: number;
  className?: string;
}) {
  return (
    // image card
    <div key={id} className={`shadow-lg ${className}`}>
      <div className={`${design.CardImage}`}>
        {/* {price ? <span className="text-2xl font-bold">+</span> : ""} */}
      </div>
      {/* Body card */}
      <div className="text-white">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
        {price ? <p className="font-bold mt-2">{price}</p> : <span></span>}
      </div>
    </div>
  );
}
