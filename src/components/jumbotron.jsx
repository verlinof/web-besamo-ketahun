import { Urbanist } from "next/font/google";
import Aos from "aos";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Jumbotron = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center mx-auto my-[194px]">
        <div className="text-gray-500 text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className={`${urbanist.className} text-[60px]`}
          >
            I'm Verlino Raya {""}
            <span className="text-white font-bold">Fajri,</span>
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className={`${urbanist.className} text-[60px]`}
          >
            Backend {""}
            <span className="text-white font-bold">Developer</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
