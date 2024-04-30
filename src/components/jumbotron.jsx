import { Urbanist } from "next/font/google";
import Image from "next/image";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Jumbotron = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center mx-auto lg:mt-[175px] lg:mb-[100px] md:my-[60px] my-[30px]">
        <div className="text-gray-500 text-center">
          <h175
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${urbanist.className} lg:text-[70px] md:text-[50px] sm:text-[30px]`}
          >
            I'm Verlino Raya {""}
            <span className="text-white font-bold">Fajri,</span>
          </h175>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className={`${urbanist.className} lg:text-[70px] md:text-[50px] sm:text-[30px]`}
          >
            Backend {""}
            <span className="text-white font-bold">
              <Typewriter
                words={["Developer", "Specialist"]}
                loop={0}
                typeSpeed={100}
                deleteSpeed={80}
              />
            </span>
            <Cursor />
          </h1>
          {/* Button Say hi */}
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className={`${urbanist.className} font-semibold text-white mt-8 mx-auto`}
          >
            <a
              href="mailto:verlinorayafajri@mail.ugm.ac.id"
              className="lg:py-[11px] lg:px-[32px] md:py-[8px] md:px-[20px] py-[5px] px-[10px] lg:text-[16px] text-xs border rounded-full hover:bg-white hover:text-black transition-all"
            >
              Say hi 👋
            </a>
          </div>
        </div>
      </div>
      {/* Mouse Icon */}
      <div className="animate-bounce">
        <a href="#about">
          <img
            className="ms-auto me-8 w-[20px] h-[30px] md:w-[40px] md:h-[60px]"
            src={"/scroll_down.svg"}
            alt={"scroll_down"}
          />
        </a>
      </div>
      {/* Divider */}
      <hr className="border border-gray-700 mt-[40px]" />
    </>
  );
};

export default Jumbotron;
