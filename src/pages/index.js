import About from "@/components/about";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
    </>
  );
}
