import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

const Logo = () => {
  return (
    <div style={{ fontSize: "23px" }} className={`${inter.className}`}>
      <h1 className="text-white text-[30px] font-bold">
        VerlinoFajri
        <span style={{ color: "#D46868" }}>.</span>
      </h1>
    </div>
  );
};

export default Logo;
