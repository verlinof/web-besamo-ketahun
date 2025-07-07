import Footer from "@/components/footer";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import PariwisataCards from "@/components/pariwisataCard";

export default function Pariwisata() {
  return (
    <>
      <Navbar active="pariwisata" />
      <div className="font-poppins">
        <Jumbotron
          title={"Pariwisata dan Budaya"}
          subtitle={
            "Kecamatan Ketahun, Kabupaten Bengkulu Utara, Provinsi Bengkulu"
          }
          image={"/content/hero-pariwisata.png"}
        />
        <PariwisataCards />
        <Footer />
      </div>
    </>
  );
}
