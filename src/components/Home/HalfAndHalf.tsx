import { Link } from "react-router-dom";
import baseimage from "../../assets/taviCow.jpg";

export default function HalfAndHalf({
  firstColor = "#3D2DA2",
  secondColor = "#f0f0f0",
  firstTitle = "First, meet the team",
  secondTitle = "second, how can we help you",
  firstText = "Meet Cyber Do It, a dynamic family business led by Vianny, mom and visionary entrepreneur. With Virgilio managing IT, Vivian excelling in graphic design, and Vianny overseeing social media, this powerhouse trio delivers a comprehensive suite of digital services. From innovative IT solutions to captivating designs and strategic social media management, Cyber Do It is your one-stop-shop for personalized and cutting-edge digital solutions.",
  secondText = "Unlock the Power of Digital Success with Our Dynamic Trio. Elevate your business to new heights, captivate your audience, and stay ahead of the curve in the digital realm. Let's revolutionize your online presence together! Embrace innovation, embrace success. Get started today!",
  image = baseimage,
}: {
  firstColor: string;
  secondColor: string;
  firstTitle: string;
  secondTitle: string;
  firstText: string;
  secondText: string;
  image: string;
}) {
  return (
    <div
      style={{
        background: `linear-gradient(${firstColor} 50%,${secondColor} 0%)`,
      }}
      className={`grid grid-cols-2 grid-rows-2 gap-3 max-[1120px]:grid-cols-1 max-[1120px]:grid-rows-1 max-[423px]:gap-20`}
    >
      <div
        className={` row-span-2 my-[12%] mx-[15%] max-[1120px]:row-start-2 max-[1120px]:mx-[25%] max-[500px]:mx-[10%] max-[1120px]:my-0`}
      >
        <img
          style={{ boxShadow: `6px 6px 10px ${firstColor}` }}
          className={`rounded-[60px] shadow-2xl shadow-[${firstColor}]`}
          src={image}
          alt=""
        />
      </div>
      <div className="h-[450px] w-[80%] max-[1120px]:row-start-1 max-[1120px]:w-[90%] max-[1120px]:mx-10 max-[500px]:mx-5">
        <div className="mt-[15%] h-[30vh]">
          <h1
            className={`text-5xl max-[1220px]:text-[${firstColor}]`}
            style={{ fontFamily: "Heavitas", color: secondColor }}
          >
            {firstTitle}
          </h1>
          <p
            style={{ fontFamily: "Trebuchet MS", color: secondColor }}
            className={`mt-2 text-[${secondColor}] mb-7`}
          >
            {firstText}
          </p>
          <Link
            to={"/about_us"}
            style={{ backgroundColor: secondColor, fontFamily: "Azeret Mono" }}
            className={`p-4 rounded-full`}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="h-[450px] w-[80%] max-[1120px]:w-[90%] max-[1120px]:mx-10 max-[500px]:mx-5">
        <div className="mt-20 grid grid-cols-2 gap-20 max-[1120px]:grid-cols-1 max-[1120px]:gap-4 max-[418px]:mt-0">
          <h1
            className={`text-5xl`}
            style={{ fontFamily: "Heavitas", color: firstColor }}
          >
            {secondTitle}
          </h1>
          <p
            style={{ color: firstColor, fontFamily: "Trebuchet MS" }}
            className="mt-2"
          >
            {secondText}
          </p>
        </div>
      </div>
    </div>
  );
}
