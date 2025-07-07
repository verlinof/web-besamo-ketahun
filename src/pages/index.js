import Footer from "@/components/footer";
import JumbotronHome from "@/components/jumbotronHome";
import LokasiPengabdian from "@/components/lokasiPengabdian";
import Navbar from "@/components/navbar";
import VideoProfile from "@/components/videoprofile";

export default function Home() {
  return (
    <>
      <Navbar active="home" />
      <div className="font-poppins overflow-x-hidden">
        <JumbotronHome />
        <VideoProfile />
        <LokasiPengabdian />
        <Footer />
      </div>
    </>
  );
}
