import Footer from "@/components/footer";
import JumbotronHome from "@/components/jumbotronHome";
import Navbar from "@/components/navbar";
import VideoProfile from "@/components/videoprofile";

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar active="home" />
      <JumbotronHome />
      <VideoProfile />
      <Footer />
    </div>
  );
}
