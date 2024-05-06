import CardProject from "@/items/cardProject";

const ProjectDisplay = (props) => {
  const { title, description } = props;

  return (
    <>
      <div className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[60px] text-white">
        <p className="text-gray-400 mb-5">{title}</p>
        <p className="text-[20px] md:text-[30px] lg:text-[38px] w-full lg:w-[811px]">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 my-[50px]">
          <CardProject />
          <CardProject />
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
