const WorkStepContainer = ({ children }) => {
  return (
    <>
      <div
        id="process"
        className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[60px] text-white"
      >
        {children}
      </div>
    </>
  );
};

export default WorkStepContainer;
