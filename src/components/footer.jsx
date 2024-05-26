import SocialMedia from "@/items/socialMedia";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[60px] text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5 items-center">
          <p className="font-semibold text-[75px] col-span-2">
            Let`s <br /> Work Together -
          </p>
          <Link href={"mailto:verlinofajri.work@gmail.com"} passHref={true}>
            <div className="border border-secondary-gray h-20 rounded-2xl p-4 flex items-center justify-around md:justify-between hover:bg-white hover:text-black transition-all ease-in-out duration-50000">
              <Image
                className="stroke-black"
                src={"/gmail_icon.svg"}
                width={40}
                height={40}
                alt={"Gmail"}
              />
              <p className="text-[18px] md:text-[22px] lg:text-[19px] xl:text-[25px]">
                verlinofajri.work@gmail.com
              </p>
            </div>
          </Link>
        </div>
      </div>
      <hr className="border border-gray-700 mt-[40px]" />
      <div className="w-full flex justify-between items-center overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[30px] text-secondary-gray">
        <p>© 2024 VerlinoFajri</p>
        <SocialMedia />
      </div>
    </>
  );
};

export default Footer;
