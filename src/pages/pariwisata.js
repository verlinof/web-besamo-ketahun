import Footer from "@/components/footer";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import PariwisataCards from "@/components/pariwisataCard";

export default function Pariwisata() {
  return (
    <div className="font-poppins">
      <Navbar active="pariwisata" />
      <Jumbotron
        title={"Pariwisata dan Budaya"}
        subtitle={
          "Kecamatan Ketahun, Kabupaten Bengkulu Utara, Provinsi Bengkulu"
        }
      />
      <PariwisataCards />
      <Footer />
    </div>
  );
}
