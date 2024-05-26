import Image from "next/image";
import Link from "next/link";
import { Cursor, Typewriter } from "react-simple-typewriter";

const JumbotronProjects = () => {
  const handleClick = () => {
    setInterval(() => {
      const url = window.location.href.replace("#projects", "");
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
            Showcasing my {""}
            <span className="text-white font-bold">Talent</span> <br /> and{" "}
            <span className="text-white font-bold">Passion</span>
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="font-semibold text-white mt-12 mx-auto"
          >
            {/* Mouse Icon */}
            <div className="animate-bounce">
              <Link href="#projects" onClick={handleClick}>
                <Image
                  className="md:w-[40px] md:h-[60px] mx-auto"
                  width={20}
                  height={30}
                  src={"/scroll_down.svg"}
                  alt={"scroll_down"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className="border border-gray-700 mt-[40px]" />
    </>
  );
};

export default JumbotronProjects;
