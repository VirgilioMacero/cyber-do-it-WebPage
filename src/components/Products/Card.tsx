export default function Card({
    id = 0,
    title = "Test",
    description = "Test description",
    price = 0,
    className = ""
}:{
    id: number
    title: string
    description: string
    price?: number
    className?: string 
}){
    return (
        // image card
        <div key={id} className={`${className} rounded-lg shadow-lg`}>
        <div className="bg-white h-32 mb-4 rounded-lg flex items-center justify-center">
          {price ? <span className="text-2xl font-bold">+</span> : ""}    
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