const WorkStep = ({ step, title, description1, description2 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 my-[50px]">
      <div className="grid grid-cols-1">
        <p className="text-[18px] text-secondary-gray">{step}</p>
        <p className="text-[35px]">{title}</p>
      </div>
      <div className="grid grid-cols-1 my-2 lg:my-0 col-span-2">
        <p className="text-[18px] text-secondary-gray">{description1}</p>
        <p className="text-[18px] text-secondary-gray my-3">{description2}</p>
        <hr className="border border-gray-700 mt-[40px]" />
      </div>
    </div>
  );
};

export default WorkStep;
