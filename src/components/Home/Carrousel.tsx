import { useState } from "react";
import image from "../../assets/carrousel-background.png";

export default function Carrousel({images}:{images:Array<string>}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex)
  const nextSlide = () => {
    console.log(`(${currentIndex} + 1) % ${images.length}` )
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div
      className="w-full h-[420px] pb-12 max-[700px]:pt-12"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between items-center">
        <button
          id="leftButton"
          className="max-[700px]:hidden  focus:bg-white  focus:bg-opacity-25 delay-200"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-[420px] text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="h-[320px] w-5/6 mx-[4vw] shadow-2xl shadow-white rounded-[60px] max-[700px]:w-full relative overflow-hidden ">
          <div className="flex h-full transition-transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }} id="container-image">
            {images.map((image, index) => (
              <img src={image} alt="" key={index} className="min-w-full h-full"/>
            ))}
            <div className="h-full min-w-full w-full bg-slate-500"></div>
            <div className="size-full min-w-full bg-green-500"></div>
            <div className="size-full min-w-full bg-red-500"></div>
          </div>

        </div>
        <button
          id="rigthButton"
          className="max-[700px]:hidden  focus:bg-white  focus:bg-opacity-25 delay-200"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-[420px] text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      {/* <div className="justify-center flex mt-2 gap-2">
        <a href="">
          <div className="rounded-xl w-6 bg-black h-2"></div>
        </a>
        <a href="">
          <div className="rounded-xl w-2 bg-black h-2"></div>
        </a>
        <a href="">
          <div className="rounded-xl w-2 bg-black h-2"></div>
        </a>
        <a href="">
          <div className="rounded-xl w-2 bg-black h-2"></div>
        </a>
      </div> */}
    </div>
  );
}
