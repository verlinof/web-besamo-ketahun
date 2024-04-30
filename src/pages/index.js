import About from "@/components/about";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="font-urbanist">
      <Navbar />
      <Jumbotron />
      <About />
    </div>
  );
}
