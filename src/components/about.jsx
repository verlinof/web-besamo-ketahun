"use client";

import SocialMedia from "@/items/socialMedia";
import { Urbanist } from "next/font/google";
import Image from "next/image";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700"],
});

const About = () => {
  return (
    <>
      <div id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-white text-[38px] font-medium">
              Hi, I am Verlino! I'm a Backend Engineer with 2 years of web
              development experience with the past 2 years spent honing my
              skills in Laravel, Node js, Golang, and Optimizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 my-11">
            <p className="text-white text-[38px] col-span-2">
              I understand the importance of a Fast, Optimal, and Reliable
              system, pride myself on producing high-quality websites, and I'm
              comfortable working solo or as part of a team.
            </p>
            <Image src="/profile-picture.png" width={390} height={390} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
