import { Urbanist } from "next/font/google";
import Image from "next/image";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700"],
});

const Tech = (props) => {
  const { technology, image } = props;

  return (
    <div className="w-full h-full border border-gray-500 grid grid-cols-1 py-[40px] cursor-pointer grayscale hover:grayscale-0 text-gray-500 hover:text-white font-bold transition-all">
      <div className="mx-auto text-center">
        <img className="w-full" src={image} alt={`${technology} + ".png"`} />
        <p className={`${urbanist.className} text-lg pt-3`}>{technology}</p>
      </div>
    </div>
  );
};

export default Tech;
