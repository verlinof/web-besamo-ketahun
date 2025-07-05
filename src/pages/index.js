import Footer from "@/components/footer";
import JumbotronHome from "@/components/jumbotronHome";
import LokasiPengabdian from "@/components/lokasiPengabdian";
import Navbar from "@/components/navbar";
import VideoProfile from "@/components/videoprofile";

export default function Home() {
  return (
    <div className="font-poppins overflow-x-hidden">
      <Navbar active="home" />
      <JumbotronHome />
      <VideoProfile />
      <LokasiPengabdian />
      <Footer />
    </div>
  );
}
