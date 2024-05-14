import CardSkillScope from "@/items/cardSkillScope";

const SkillScope = () => {
  return (
    <>
      <div className="w-full overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[60px] text-white">
        <p className="text-gray-400 mb-5">What do i do?</p>
        <p className="text-[20px] md:text-[30px] lg:text-[38px] w-full lg:w-[811px]">
          These are some skills I`ve picked up over my career.
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
            icon="/skill-scope/system_design_icon.svg"
            title="System Design"
            description="I specialize in designing robust systems for 
            applications, focusing on architecture design, technology awareness, 
            algorithm optimization, and business alignment. My skills include 
            creating scalable architectures, leveraging cutting-edge 
            technologies, and integrating business requirements seamlessly."
          />
          <CardSkillScope
            icon="/skill-scope/software_research_icon.svg"
            title="Software Research"
            description="I specialize in design thinking and requirement 
            analysis to craft effective solutions. My expertise includes 
            selecting the right tech stack, creating detailed diagrams, and 
            mapping out app flow to ensure seamless functionality and user experience."
          />
          <CardSkillScope
            icon="/skill-scope/mobile_icon.svg"
            title="Mobile Development"
            description="I excel in utilizing Fetch API and the MVVM 
            architecture to build dynamic applications. My skills also include 
            creating responsive layouts and proficient debugging to ensure 
            smooth and efficient performance."
          />
        </div>
      </div>
    </>
  );
};

export default SkillScope;
