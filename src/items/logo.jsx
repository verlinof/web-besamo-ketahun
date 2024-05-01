import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className={`${inter.className} text-[27px] lg:text-[30px]`}>
        <p className="text-white font-bold">
          VerlinoFajri
          <span style={{ color: "#D46868" }}>.</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
