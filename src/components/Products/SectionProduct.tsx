import Card from "./Card";

export default function SectionProduct({
  title,
  cards,
  className = "",
  classNameCard = "",
}: {
  title: string;
  cards: Array<any>;
  className?: string;
  classNameCard?: string;
}) {
  return (
    <div
      className={` min-h-fit w-full  flex flex-col items-center py-12  ${className}`}
    >
      <h1
        className={` text-white  font-bold w-[90%] text-[83px] lg:ml-10 pl-8  lg:self-start rounded-full min-[1024px]:mb-[40px]  max-[1024px]:mb-[40px] max-[710px]:text-3xl`}
      >
        {title}
      </h1>
      <div className="grid grid-cols-5 gap-10 px-4 w-[90%] max-[1232px]:grid-cols-4 max-[938px]:grid-cols-3 max-[710px]:grid-cols-2 max-[710px]:justify-items-center max-[445px]:grid-cols-1">
        {cards.map((card) => (
          <Card
            className={classNameCard}
            id={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}
