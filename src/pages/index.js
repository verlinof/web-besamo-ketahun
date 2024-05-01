import About from "@/components/about";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import ProjectDisplay from "@/components/projectDisplay";

export default function Home() {
  return (
    <div className="font-urbanist">
      <Navbar />
      <Jumbotron />
      <About />
      <ProjectDisplay title="Featured Projects" description="I craft digital solutions that showcase my passion and expertise in
          System and Developments."/>
    </div>
  );
}
