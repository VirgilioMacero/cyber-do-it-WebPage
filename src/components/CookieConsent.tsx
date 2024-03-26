import { useCookies } from "react-cookie";
import cookieImage from "../assets/cookie.png";
import Button from "./Button";

export default function CookieConsent() {
  //@ts-ignore
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookiesConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <div className="bg-[#4361ED] bg-opacity-50 h-40 w-[100%] fixed bottom-0 z-10 flex justify-between max-[966px]:h-[320px] max-[600px]:flex-col max-[600px]:justify-start">
      <div className="w-[50%]">
        <h1
          style={{ fontFamily: "Azeret Mono", color: "#f0f0f0" }}
          className="text-3xl ml-10 mt-10"
        >
          Cookies
        </h1>
      </div>
      <div className=" w-[50%] grid grid-cols-2 gap-4 max-[966px]:grid-cols-1 max-[600px]:h-[80%] max-[600px]:w-full max-[600px]:justify-items-center">
        <div className="w-full self-center flex justify-center  ">
          <Button
            onClick={() => {}}
            bgColor="#f0f0f0"
            name="Accept some Cookies"
            textColor="#000000"
            hoverBg="#4361ED"
            className=""
          />
        </div>
        <div className="align-middle justify-self-center">
          <div className="w-[229.6px] h-[56px]">
            <img
              src={cookieImage}
              style={{ height: "80px", width: "90px" }}
              alt=""
              className="z-20 absolute mt-2 -ml-12 max-[966px]:-mt-10"
            />
            <button
              style={{ fontFamily: "Azeret Mono" }}
              className="hover:bg-[#4361ED] bg-white p-4 w-[230px] rounded-full z-10  absolute mt-[54px]  text-center max-[966px]:mt-0"
              onClick={giveCookiesConsent}
            >
              Accept all Cookies
            </button>
            <img
              src={cookieImage}
              style={{ height: "90px", width: "90px" }}
              alt=""
              className="z-0 absolute mt-[60px] ml-[180px] max-[966px]:mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
