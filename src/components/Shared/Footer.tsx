export default function Footer() {
  const fechaActual = new Date();

  return (
    <div className="h-[220px] w-full">
      <div className="flex flex-row-reverse  mt-10 max-[700px]:flex-row max-[700px]:ml-4">
        <div
          className="grid grid-cols-2 gap-10 max-[376px]:grid-cols-1 "
          style={{ fontFamily: "Azeret Mono" }}
        >
          <div className="mb-4">
            <h1 className="mb-4 text-2xl">Costumer Service</h1>
            <a href="">
              <p className="hover:underline decoration-[#3D2DA2] decoration-2">
                Contact Us
              </p>
            </a>
            <a href="">
              <p className="hover:underline decoration-[#3D2DA2] decoration-2">
                About Us
              </p>
            </a>
            <a href="">
              <p className="hover:underline decoration-[#3D2DA2] decoration-2">
                FAQ
              </p>
            </a>
          </div>
          <div className="mb-4">
            <h1 className="mb-4 text-2xl">Legal</h1>
            <a href="">
              <p className="hover:underline decoration-[#3D2DA2] decoration-2">
                Privacy Policy
              </p>
            </a>
            <a href="">
              <p className="hover:underline decoration-[#3D2DA2] decoration-2">
                Terms of Use
              </p>
            </a>
            <a href="">
              <p className="hover:underline decoration-[#3D2DA2] decoration-2">
                Site Map
              </p>
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full text-center mt-10 max-[571px]:mt-0"
        style={{ fontFamily: "Azeret Mono" }}
      >
        <p className="text-xs">
          Copyright © {fechaActual.getFullYear()}. All Rights Reserved By Cyber
          Do It {"(Created by Virgilio and Vivian Macero)"}{" "}
        </p>
      </div>
    </div>
  );
}
