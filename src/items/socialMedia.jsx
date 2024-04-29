import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="flex justify-between items-center md:space-x-6 space-x-4">
      <a
        href="https://www.linkedin.com/in/verlino-raya-fajri/"
        className="hover:fill-white"
      >
        <Image
          src={"/social-media-icon/linkedin-icon.svg"}
          width={32}
          height={32}
          className="hover:fill-white fill-current"
        />
      </a>
      <a href="https://github.com/verlinof" className="hover:fill-white">
        <Image
          src={"/social-media-icon/github-icon.svg"}
          width={32}
          height={32}
          className="hover:fill-white fill-current"
        />
      </a>
      <a
        href="https://www.instagram.com/aji_koko_/"
        className="hover:fill-white"
      >
        <Image
          src={"/social-media-icon/instagram-icon.svg"}
          width={32}
          height={32}
          className="hover:fill-white fill-current"
        />
      </a>
      <a
        href="https://www.fiverr.com/verlinofajri"
        className="hover:fill-white"
      >
        <Image
          src={"/social-media-icon/fiverr-icon.svg"}
          width={32}
          height={32}
          className="hover:fill-white fill-current"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
