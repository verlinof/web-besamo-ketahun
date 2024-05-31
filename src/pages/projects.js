import Footer from "@/components/footer";
import JumbotronProjects from "@/components/jumbotronProjects";
import Navbar from "@/components/navbar";
import ProjectDisplay from "@/components/projectDisplay";
import CardProject from "@/items/cardProject";

export default function Projects() {
  return (
    <div className="font-urbanist bg-black">
      <Navbar />
      <JumbotronProjects />
      <ProjectDisplay title="My Projects" description="Discover my skills and creativity in action, with just one click.">
        <CardProject
          image="/projects/kubuku.png"
          title="Kubuku"
          description="This application is a book e-commerce, where users can borrow books
            through this application. This application uses Firebase as the main
            database and also as Authorization."
          aos_duration="1500"
          role="Fullstack"
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
        <CardProject
          image="/projects/permission-backend-app.png"
          title="Permission Backend App"
          description="
          Permission Backend App is a REST API that features Authentication and
          Authorization, supports multi-role levels, and is built with MVC 
          architecture and migrations. This backend application is used by 
          regular users to submit permission requests, which are then verified 
          by admins or verifiers. Registration on this REST API also requires 
          approval from admins or verifiers to be successfully registered."
          aos_duration="1500"
          role="Backend"
          tools="Express JS & MySQL"
          links="https://github.com/verlinof/permission-backend-app"
        />
        <CardProject
          image="/projects/golang-restful-api.png"
          title="Golang Restful API"
          description="
          This project is a RESTFUL API that features Authentication and
          Authorization using JWT, supports multi-role levels, and is built with MVC 
          architecture and migrations. This backend application also can handle File Upload"
          aos_duration="3000"
          role="Backend"
          tools="Gin Golang"
          links="https://github.com/verlinof/restful-api-golang"
        />
        <CardProject
          image="/projects/syncpos.png"
          title="Syncpos (Syncronize Posyandu)"
          description="
          Syncpos is a comprehensive integration system designed to enhance communication and data management across multiple posyandus .
          The project encompasses two robust APIs: an internal API that powers the Syncpos web application, and an external API that en ables
          posyandus to seamlessly connect with our system. To ensure secure and efficient access, Syncpos offers API keys to posyandus,
          facilitating their interaction with the Syncpos API. This dual-API architecture ensures smooth interoperability and optimized functionality
          for all users."
          aos_duration="1500"
          role="Backend"
          tools="Express & Laravel"
          links="http://35.240.194.181:4000/api"
        />
      </ProjectDisplay>
      <Footer />
    </div>
  );
};