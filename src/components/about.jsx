"use client";

import SocialMedia from "@/items/socialMedia";
import Tech from "@/items/tech";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700"],
});

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`${urbanist.className} w-full flex items-center justify-between mt-[70px] mb-[50px]`}
        >
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
            <p
              className={`${urbanist.className} text-white md:text-[30px] text-[20px]`}
            >
              Hi, I am Verlino! I`m a Backend Engineer with 2 years of web
              development experience with the past 2 years spent honing my
              skills in Laravel, Node js, Golang, and Optimizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 my-11">
            <p
              className={`${urbanist.className} text-white md:text-[30px] text-[20px] col-span-2`}
            >
              I understand the importance of a Fast, Optimal, and Reliable
              system, pride myself on producing high-quality websites, and I`m
              comfortable working solo or as part of a team.
            </p>
            <Image
              className="grayscale hover:grayscale-0 transition-all duration-500 delay-100 cursor-pointer"
              src="/profile-picture.png"
              width={390}
              height={390}
              alt="profile-picture"
            />
          </div>
        </div>
      </div>
      {/* Tech Stack */}
      <div className="w-full flex justify-center my-7">
        <Marquee pauseOnHover={true} gradient={false}>
          <div className="border border-gray-500 grid grid-cols-1 cursor-pointer grayscale hover:grayscale-0 text-gray-500 hover:text-white font-bold transition-all">
            <div className="mx-auto text-center px-[140px] py-[40px]">
              <img src="/tech/laravel-icon.png" alt={`Laravel Icon`} />
              <p className={`${urbanist.className} text-lg pt-3`}>Laravel</p>
            </div>
          </div>

          {/* <Tech technology="Node Js" image="/tech/node-icon.png" />
          <Tech technology="Next Js" image="/tech/nextjs-icon.png" />
          <Tech technology="React Js" image="/tech/reactjs-icon.png" />
          <Tech technology="Kotlin" image="/tech/kotlin-icon.png" />
          <Tech technology="Tailwind" image="/tech/tailwind-icon.png" />
          <Tech technology="Java" image="/tech/java-icon.png" /> */}
        </Marquee>
      </div>
    </>
  );
};

export default About;
