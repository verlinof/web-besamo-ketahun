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
          <CardProject
            image="/projects/kubuku.png"
            title="Kubuku"
            description="This application is a book e-commerce, where users can borrow books
            through this application. This application uses Firebase as the main
            database and also as Authorization."
            aos_duration="1500"
            role="Backend"
            tools="Kotlin & Firebase"
            links="https://github.com/verlinof/KuBuku"
          />
          <CardProject
            image="/projects/kubuku.png"
            title="Kubuku"
            description="This application is a book e-commerce, where users can borrow books
            through this application. This application uses Firebase as the main
            database and also as Authorization."
            aos_duration="3000"
            role="Backend"
            tools="Kotlin & Firebase"
            links="https://github.com/verlinof/KuBuku"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
