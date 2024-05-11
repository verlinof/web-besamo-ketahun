import About from "@/components/about";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import ProjectDisplay from "@/components/projectDisplay";
import CardProject from "@/items/cardProject";

export default function Home() {
  return (
    <div className="font-urbanist bg-black">
      <Navbar />
      <Jumbotron />
      <About />
      <ProjectDisplay title="Featured Projects" description="I craft digital solutions that showcase my passion and expertise in
          System and Developments.">
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
          title="Softlancer (Software Freelancer)"
          description="Softlancer is a web application where users can search 
          for a project that will run, and apply for the project, users on this 
          web can use a Google account to log in and register. This web is built 
          using Laravel as a backend with REST API architecture, and the Frontend is 
          built using Blade and Tailwind."
          aos_duration="3000"
          role="Fullstack"
          tools="Kotlin & Laravel"
          links="https://github.com/verlinof/Softlancer"
        />
      </ProjectDisplay>
    </div>
  );
}
