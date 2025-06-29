import Footer from "@/components/footer";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import PariwisataCards from "@/components/pariwisataCard";

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar active="pariwisata" />
      <Jumbotron />
      <PariwisataCards />
      <Footer />
    </div>
  );
}
