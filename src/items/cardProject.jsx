import Image from "next/image";

const CardProject = (props) => {
  const { image, title, description, aos_duration, role, tools, links } = props;
  return (
    <div className="w-full hover:-translate-y-1 cursor-pointer transition-all ease-in-out duration-300">
      <div
        data-aos="fade-up"
        data-aos-duration={aos_duration}
        className=" h-full flex flex-col justify-between border border-gray-700 rounded-3xl overflow-hidden bg-card-background"
      >
        <div>
          <Image
            className="w-full object-cover"
            quality={100}
            src={image}
            width={560}
            height={250}
            alt={`${title} App`}
          />
          <div className="p-[20px]">
            <p className="font-semibold text-[25px]">{title}</p>
            <p className="text-[18px]">{description}</p>
          </div>
        </div>
        <div className="p-[20px]">
          <div className="flex flex-wrap items-center justify-between">
            <div className="rounded-3xl py-[10px] px-[35px] border border-main-gray hover:border-black hover:bg-white text-secondary-gray font-medium hover:text-black hover:font-semibold transition-all ease-in-out duration-300 text-[10px] md:text-sm xl:text-md cursor-default hidden xl:block">
              {role}
            </div>
            <div className="rounded-3xl py-[10px] px-[35px] border border-main-gray hover:border-black hover:bg-white text-secondary-gray font-medium hover:text-black hover:font-semibold transition-all ease-in-out duration-300 text-[10px] md:text-sm xl:text-md cursor-default">
              {tools}
            </div>
            <a href={links} target="_blank">
              <div className="rounded-3xl py-[10px] px-[35px] border border-main-gray hover:border-black hover:bg-white text-secondary-gray font-medium hover:text-black hover:font-semibold transition-all ease-in-out duration-300 text-[10px] md:text-sm xl:text-md">
                Details
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
