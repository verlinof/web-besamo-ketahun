import CardSkillScope from "@/items/cardSkillScope";

const SkillScope = () => {
  return (
    <>
      <div className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[60px] text-white">
        <p className="text-gray-400 mb-5">What do i do?</p>
        <p className="text-[20px] md:text-[30px] lg:text-[38px] w-full lg:w-[811px]">
          These are some skills I've picked up over my career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 my-[50px]">
          <CardSkillScope
            icon="/skill-scope/frontend_icon.svg"
            title="Front End"
            description="Specializing in Front-End Development, I excel in crafting visually
          stunning and user-friendly interfaces that elevate the appeal and
          functionality of your website or application, like Responsive Website,
          Fetch API, and Company Profile"
          />
          <CardSkillScope
            icon="/skill-scope/backend_icon.svg"
            title="Back End"
            description="I specialize in crafting efficient systems to power applications. Skills include 
            RESTful API creation, authorization, middleware integration, job 
            management, email notification, WebSocket, SQL and NoSQL 
            database management."
          />
          <CardSkillScope
            icon="/skill-scope/backend_icon.svg"
            title="Back End"
            description="I specialize in crafting efficient systems to power applications. Skills include 
            RESTful API creation, authorization, middleware integration, job 
            management, email notification, WebSocket, SQL and NoSQL 
            database management."
          />
        </div>
      </div>
    </>
  );
};

export default SkillScope;
