import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className={`${inter.className} text-[23pxs]`}>
        <h1 className="text-white text-[30px] font-bold">
          VerlinoFajri
          <span style={{ color: "#D46868" }}>.</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
