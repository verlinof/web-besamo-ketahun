const ProjectDisplay = (props) => {
  const { title, description } = props;

  return (
    <>
      <div className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[60px] text-white">
        <p className="text-gray-400 mb-5">{title}</p>
        <p className="text-[20px] md:text-[30px] lg:text-[38px] w-full lg:w-[811px]">
          {description}
        </p>
        <div className="my-[50px]">
          <hr className="border-gray-500" />
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
