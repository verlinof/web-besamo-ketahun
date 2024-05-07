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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 my-[50px]">
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
            image="/projects/webchat.png"
            title="Webchat (Express, Socket IO)"
            description="Webchat is an application that has the main feature to chat in public with
            other people, the server will send chat data in real time and also read the number of 
            users who are currently active on the website. This website uses Express and Socket 
            IO for the backend, and HTML CSS for the page display."
            aos_duration="3000"
            role="Fullstack"
            tools="Express JS & Socket IO"
            links="https://github.com/verlinof/webchat-express-websocket"
          />
          <CardProject
            image="/projects/bromo.png"
            title="Bromo (Broiler Monitoring)"
            description="Bromo is a mobile application that is used as a 
            monitoring tool for broiler cages. This application has several 
            platforms, so to combine them using APIs made using Laravel and 
            Kotlin for the Mobile app."
            aos_duration="1500"
            role="Fullstack"
            tools="Kotlin & Laravel"
            links="https://github.com/askar-ef/Broiler-Monitoring"
          />
          <CardProject
            image="/projects/softlancer.png"
            title="Bromo (Broiler Monitoring)"
            description="Bromo is a mobile application that is used as a 
            monitoring tool for broiler cages. This application has several 
            platforms, so to combine them using APIs made using Laravel and 
            Kotlin for the Mobile app."
            aos_duration="1500"
            role="Fullstack"
            tools="Kotlin & Laravel"
            links="https://github.com/askar-ef/Broiler-Monitoring"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
