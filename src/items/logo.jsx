import { Inter } from "next/font/google";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className={`font-inter`}>
        <p className="text-white font-bold text-[20px] lg:text-3xl">
          VerlinoFajri
          <span className="text-custom-orange">.</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
