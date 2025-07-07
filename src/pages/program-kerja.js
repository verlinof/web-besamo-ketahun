import Footer from "@/components/footer";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import ProkerCards from "@/components/prokerCards";

export default function Pariwisata() {
  return (
    <>
      <Navbar active="program kerja" />
      <div className="font-poppins">
        <Jumbotron
          title={"Program Kerja"}
          subtitle={
            "Kecamatan Ketahun, Kabupaten Bengkulu Utara, Provinsi Bengkulu"
          }
          image={"/content/hero-pariwisata.png"}
        />
        <ProkerCards />
        <Footer />
      </div>
    </>
  );
}
