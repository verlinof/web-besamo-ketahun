import Footer from "@/components/footer";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import UmkmCards from "@/components/umkmCard";

export default function Pariwisata() {
  return (
    <div className="font-poppins">
      <Navbar active="umkm" />
      <Jumbotron
        title={"UMKM"}
        subtitle={
          "Kecamatan Ketahun, Kabupaten Bengkulu Utara, Provinsi Bengkulu"
        }
      />
      <UmkmCards />
      <Footer />
    </div>
  );
}
