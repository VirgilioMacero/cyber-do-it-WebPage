import { useState } from "react";
import image from "../../assets/carrousel-background.png";
export default function Carrousel({ images }: { images: Array<string> }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  //@ts-ignore
  const startPosition = (position) => {
    setIsDragging(true);
    setStartPos(position);
    setCurrentTranslate(prevTranslate);
  };
  //@ts-ignore
  const movePosition = (position) => {
    if (isDragging) {
      const currentPosition = position - startPos;
      setCurrentTranslate(prevTranslate + currentPosition);
    }
  };

  const endPosition = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -20 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    if (movedBy > 20 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setPrevTranslate(currentTranslate);
  };

  // Swipe for Phone Gestures

  return (
    <div
      className="w-full min-h-[420px] h-80 pb-12 max-[700px]:pt-12"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between items-center size-full pt-10">
        <button
          id="leftButton"
          className="max-[700px]:hidden  focus:bg-white  focus:bg-opacity-25 delay-200"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-16 h-[420px] text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="min-h-[320px] h-full w-5/6 mx-[4vw] shadow-2xl shadow-white rounded-[60px] max-[700px]:w-full relative overflow-hidden ">
          <div
            className="flex h-full transition-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={(e) => startPosition(e.touches[0].clientX)}
            onTouchMove={(e) => movePosition(e.touches[0].clientX)}
            onTouchEnd={endPosition}
          >
            {images.map((image, index) => {
              if (image.includes("http")) {
                return (
                  <img
                    src={image}
                    alt=""
                    key={index}
                    className="min-w-full h-full"
                  />
                );
              } else {
                return (
                  <div
                    key={index}
                    className="h-full text-white min-w-full flex items-center justify-center w-full bg-transparent"
                  >
                    {image}
                  </div>
                );
              }
            })}
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
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-16 h-[420px] text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
