import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="flex justify-between items-center md:space-x-6 space-x-4">
      <a
        href="https://www.linkedin.com/in/verlino-raya-fajri/"
        className="hover:-translate-y-2 transition-all ease-in-out duration-100 hover:scale-110"
      >
        <Image
          src={"/social-media-icon/linkedin-icon.svg"}
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://github.com/verlinof"
        className="hover:-translate-y-2 transition-all ease-in-out duration-100 hover:scale-110"
      >
        <Image
          src={"/social-media-icon/github-icon.svg"}
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://www.instagram.com/aji_koko_/"
        className="hover:-translate-y-2 transition-all ease-in-out duration-100 hover:scale-110"
      >
        <Image
          src={"/social-media-icon/instagram-icon.svg"}
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://www.fiverr.com/verlinofajri"
        className="hover:-translate-y-2 transition-all ease-in-out duration-100 hover:scale-110"
      >
        <Image
          src={"/social-media-icon/fiverr-icon.svg"}
          width={32}
          height={32}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
