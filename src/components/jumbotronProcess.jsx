import Image from "next/image";
import Link from "next/link";
import { Cursor, Typewriter } from "react-simple-typewriter";

const JumbotronProcess = () => {
  const handleClick = () => {
    setInterval(() => {
      const url = window.location.href.replace("#process", "");
      history.replaceState({}, document.title, url);
    }, 1000);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center mx-auto lg:mt-[175px] lg:mb-[100px] md:my-[60px] my-[30px]">
        <div className="text-gray-500 text-center">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-urbanist lg:text-[70px] md:text-[50px] text-[30px]"
          >
            Working{" "}
            <span className="font-bold text-white">
              <Typewriter
                words={["Process", "Flow"]}
                loop={0}
                typeSpeed={100}
                deleteSpeed={80}
              />
              <Cursor />
            </span>
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="lg:text-[24px] md:text-[20px] text-[18px] my-2"
          >
            How I Combine design and technology to create exceptional <br />
            user experiences.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="font-semibold text-white mt-12 mx-auto"
          >
            {/* Mouse Icon */}
            <div className="animate-bounce">
              <Link href="#process" onClick={handleClick}>
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

export default JumbotronProcess;
