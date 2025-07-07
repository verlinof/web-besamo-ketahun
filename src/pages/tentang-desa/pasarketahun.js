import Footer from "@/components/footer";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function TentangDesa() {
  const [selectedTab, setSelectedTab] = useState("profil");

  const profileData = [
    { label: "Nama Desa", value: "Pasar Ketahun" },
    { label: "Kecamatan", value: "Ketahun" },
    { label: "Kabupaten", value: "Bengkulu Utara" },
    { label: "Provinsi", value: "Bengkulu" },
    { label: "Kode Pos", value: "38361" },
    { label: "Luas Wilayah", value: "± 34.50 km²" },
    { label: "Ketinggian", value: "150 mdpl" },
  ];

  const demographyData = [
    { label: "Jumlah Penduduk", value: "±3.190 jiwa" },
    { label: "Jumlah KK", value: "±850 KK" },
    { label: "Jumlah Dusun", value: "3 Dusun" },
    {
      label: "Mata Pencaharian",
      value: "Petani, Pegawai, Nelayan, dan Pelaku Usaha",
    },
  ];

  const statsData = [
    { number: "3.190", label: "Jumlah Penduduk" },
    { number: "850", label: "Kepala Keluarga" },
    { number: "3", label: "Dusun" },
    { number: "34.50", label: "Luas Wilayah (km²)" },
  ];

  const tabs = [
    { id: "profil", label: "Profil Desa", data: profileData },
    { id: "demografi", label: "Demografi", data: demographyData },
  ];

  return (
    <>
      <Navbar />
      <Jumbotron
        title={"Desa Pasar Ketahun"}
        subtitle={
          "Kecamatan Ketahun, Kabupaten Bengkulu Utara, Provinsi Bengkulu"
        }
        image={"/content/bg-desa-ps-ketahun.jpg"}
      />
      <div className="font-poppins overflow-x-hidden">
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <main className="py-16">
              {/* About Section */}
              <section className="mb-10">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
                    <h2 className="text-2xl font-medium text-gray-900 mb-6 pb-3 border-b border-gray-200">
                      Tentang Desa
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                      <p className="text-justify">
                        Desa Ketahun merupakan salah satu desa yang terletak di
                        Kecamatan Ketahun, Kabupaten Bengkulu Utara, Provinsi
                        Bengkulu. Desa ini dikenal dengan keindahan alamnya yang
                        masih asri dan kehidupan masyarakat yang masih
                        menjunjung tinggi nilai-nilai tradisional.
                      </p>
                      <p className="text-justify">
                        Wilayah desa ini didominasi oleh perkebunan dan
                        persawahan yang menjadi mata pencaharian utama
                        masyarakat. Selain itu, desa ini juga memiliki potensi
                        wisata alam yang dapat dikembangkan untuk meningkatkan
                        kesejahteraan masyarakat.
                      </p>
                      <p className="text-justify">
                        Masyarakat Desa Ketahun sangat ramah dan gotong royong
                        dalam menjalankan berbagai kegiatan kemasyarakatan.
                        Tradisi dan budaya lokal masih terjaga dengan baik,
                        menjadikan desa ini memiliki karakteristik yang unik dan
                        menarik.
                      </p>
                    </div>
                  </div>

                  {/* Tabbed Information */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
                    <div className="mb-6">
                      <div className="flex space-x-1 bg-gray-100 p-1 rounded-2xl">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                              selectedTab === tab.id
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      {tabs
                        .find((tab) => tab.id === selectedTab)
                        ?.data.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                          >
                            <span className="text-gray-700 font-medium">
                              {item.label}
                            </span>
                            <span className="text-gray-600">{item.value}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Statistics Section */}
              <section className="mb-10">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-8 pb-3 border-b border-gray-200">
                    Statistik Desa
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {statsData.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="text-3xl font-light text-gray-900 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Map Section */}
              <section className="mb-10">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-8 pb-0">
                    <h2 className="text-2xl font-medium text-gray-900 mb-6 ">
                      Lokasi Desa
                    </h2>
                  </div>
                  <div className="h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.7919847700816!2d101.82239982068451!3d-3.3801268181606274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e33e95209a78cb1%3A0x3fe51c438ee3982e!2sKANTOR%20DESA%20PASAR%20KETAHUN%20KECAMATAN%20KETAHUN%20KABUPATEN%20BENGKULU%20UTARA!5e1!3m2!1sen!2sid!4v1751873035873!5m2!1sen!2sid"
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
