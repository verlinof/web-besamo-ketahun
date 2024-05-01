import SocialMedia from "@/items/socialMedia";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TechItem = ({ technology, image }) => {
  return (
    <div className="border border-gray-500 cursor-pointer grayscale hover:grayscale-0 text-gray-500 hover:text-white font-bold transition-all">
      <div className="text-center px-[140px] py-[10px] lg:px-[180px] lg:py-[30px]">
        <Image width={100} height={75} src={image} alt={`${technology} Icon`} />
        <p className="text-xl font-normal pt-3">{technology}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full flex items-center justify-between mt-[70px] mb-[50px]">
          <div className="text-gray-400">
            <p>About me</p>
          </div>
          <SocialMedia />
        </div>
        {/* About */}
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="flex flex-wrap items-center justify-center"
        >
          <div>
            <p className="text-white md:text-[30px] text-[20px]">
              Hi, I am Verlino! I`m a Backend Engineer with 2 years of web
              development experience with the past 2 years spent honing my
              skills in <span className="font-bold">Laravel</span>,{" "}
              <span className="font-bold">Node.js</span>,{" "}
              <span className="font-bold">Golang</span>, and{" "}
              <span className="font-bold">Optimizations</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 my-11">
            <p className="text-white md:text-[30px] text-[20px] col-span-2">
              I understand the importance of a Fast, Optimal, and Reliable
              system, pride myself on producing high-quality websites, and I`m
              comfortable working solo or as part of a team.
            </p>
            <div className="grayscale hover:grayscale-0 transition-all duration-500 delay-100 cursor-pointer">
              <Image
                src="/profile-picture.png"
                width={390}
                height={390}
                alt="profile-picture"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Tech Stack */}
      <div className="w-full flex justify-center my-7">
        <Marquee speed={100} pauseOnHover={true} gradient={false}>
          <TechItem technology="Laravel" image="/tech/laravel-icon.png" />
          <TechItem technology="Golang" image="/tech/golang-icon.png" />
          <TechItem technology="Node Js" image="/tech/node-icon.png" />
          <TechItem technology="Next Js" image="/tech/nextjs-icon.png" />
          <TechItem technology="React Js" image="/tech/reactjs-icon.png" />
          <TechItem technology="Kotlin" image="/tech/kotlin-icon.png" />
          <TechItem technology="Tailwind" image="/tech/tailwind-icon.png" />
          <TechItem technology="Java" image="/tech/java-icon.png" />
        </Marquee>
      </div>
    </>
  );
};

export default About;
