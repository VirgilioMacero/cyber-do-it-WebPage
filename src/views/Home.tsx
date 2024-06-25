import Header from "../components/Shared/Header";
import Carrousel from "../components/Home/Carrousel";
import HalfAndHalf from "../components/Home/HalfAndHalf";
import Address from "../components/Home/Address";
import Footer from "../components/Shared/Footer";
import CookieConsent from "../components/Shared/CookieConsent";
import groupImage from "../assets/familyPhoto.jpg";
import { useCookies } from "react-cookie";
import Gallery from "../components/Gallery";

export default function Home() {
  const [cookies] = useCookies(["cookieConsent"]);
  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'Hola',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3'
  ];

  return (
    <div>
      <Header></Header>
      <Carrousel images={images}/>
      <HalfAndHalf
        firstColor="#3D2DA2"
        secondColor="#f0f0f0"
        firstTitle="First, meet the team"
        secondTitle="second, how can we help you"
        firstText="Meet Cyber Do It, a dynamic family business led by Vianny, mom and visionary entrepreneur. With Virgilio managing IT, Vivian excelling in graphic design, and Vianny overseeing social media, this powerhouse trio delivers a comprehensive suite of digital services. From innovative IT solutions to captivating designs and strategic social media management, Cyber Do It is your one-stop-shop for personalized and cutting-edge digital solutions."
        secondText="Unlock the Power of Digital Success with Our Dynamic Trio. Elevate your business to new heights, captivate your audience, and stay ahead of the curve in the digital realm. Let's revolutionize your online presence together! Embrace innovation, embrace success. Get started today!"
        image={groupImage}
      />
      <Gallery/>
      <Address />
      <Footer />
      {!cookies.cookieConsent && <CookieConsent />}
    </div>
  );
}
