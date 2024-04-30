import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

const Logo = () => {
  return (
    <a href="/">
      <div className={`${inter.className} text-[23pxs]`}>
        <h1 className="text-white text-[30px] font-bold">
          VerlinoFajri
          <span style={{ color: "#D46868" }}>.</span>
        </h1>
      </div>
    </a>
  );
};

export default Logo;
