import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className={`font-poppins`}>
        <Image
          width={64}
          height={64}
          quality={100}
          src="/icon/LOGOKETAHUN.png"
          alt="Logo Ketahun"
        />
      </div>
    </Link>
  );
};

export default Logo;
