import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const Logo = () => {
  return (
    <div className={inter.className}>
      <h1 className="text-white">
        VerlinoFajri
        <span className={`${inter.className} text-customOrange`}>.</span>
      </h1>
    </div>
  );
};

export default Logo;
