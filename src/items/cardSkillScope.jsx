import Image from "next/image";

const CardSkillScope = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="w-full hover:-translate-y-1 transition-all ease-in-out duration-300">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className=" h-full flex flex-col border border-gray-700 rounded-3xl overflow-hidden bg-card-background p-[50px]"
      >
        <div>
          <div className="w-[41px] h-[41px] border rounded-lg border-main-gray flex justify-center">
            <Image src={icon} width={25} height={25} quality={100} />
          </div>
          <p className="text-[28px] my-[20px]">{title}</p>
        </div>
        <p className="text-secondary-gray">{description}</p>
      </div>
    </div>
  );
};

export default CardSkillScope;
