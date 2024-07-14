import Card from "./Card";

export default function SectionProduct({
    title,
    cards,
    className = "",
    classNameCard = ""
}:{
    title: string
    cards: Array<any>
    className?: string
    classNameCard?: string
}){

    return (
        // bg-gradient-to-r from-purple-700 to-purple-900
    <div className={`${className} min-h-fit w-full  flex flex-col items-center py-12`}>
        <div className= {`${classNameCard} text-white text-3xl font-bold w-[90%]   lg:ml-10 pl-8 lg:pr-[40%] lg:self-start rounded-full lg:mb-8`}>{title}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 w-[90%]">
          {cards.map((card) => (
            <Card className={classNameCard} id={card.id} title={card.title} description={card.description} />
          ))}
        </div>

      </div>
    </div>
  );
}
