import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Jumbotron = () => {
  const handleClick = () => {
    setInterval(() => {
      const url = window.location.href.replace("#about", "");
      history.replaceState({}, document.title, url);
    }, 1000);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center mx-auto lg:mt-[175px] lg:mb-[100px] md:my-[60px] my-[30px]">
        <div className="text-gray-500 text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-urbanist lg:text-[70px] md:text-[50px] text-[30px]"
          >
            I`m Verlino Raya {""}
            <span className="text-white font-bold">Fajri,</span>
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className={`lg:text-[70px] md:text-[50px] text-[30px]`}
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
            className="font-semibold text-white mt-8 mx-auto"
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
        <Link href="#about" onClick={handleClick}>
          <Image
            className="ms-auto me-8 md:w-[40px] md:h-[60px]"
            width={20}
            height={30}
            src={"/scroll_down.svg"}
            alt={"scroll_down"}
          />
        </Link>
      </div>
      {/* Divider */}
      <hr className="border border-gray-700 mt-[40px]" />
    </>
  );
};

export default Jumbotron;
