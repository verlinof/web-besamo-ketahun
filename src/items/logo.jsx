import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className={`font-inter`}>
        <p className="text-white font-bold text-[20px] lg:text-2xl">
          VerlinoFajri
          <span className="text-custom-orange">.</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
