import Footer from "@/components/footer";
import Jumbotron from "@/components/jumbotron";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function TentangDesa() {
  const [selectedTab, setSelectedTab] = useState("profil");

  const profileData = [
    { label: "Nama Desa", value: "Urai" },
    { label: "Kecamatan", value: "Ketahun" },
    { label: "Kabupaten", value: "Bengkulu Utara" },
    { label: "Provinsi", value: "Bengkulu" },
    { label: "Kode Pos", value: "38361" },
    { label: "Luas Wilayah", value: "± 9,48 km²" },
    { label: "Ketinggian", value: "0-150 mdpl" },
  ];

  const demographyData = [
    { label: "Jumlah Penduduk", value: "±1.696 jiwa" },
    { label: "Jumlah Dusun", value: "3 Dusun" },
    { label: "Jumlah KK", value: "658 KK" },
    { label: "Mata Pencaharian", value: "Pertanian, Perkebunan, Perikanan" },
  ];

  const statsData = [
    { number: "1770", label: "Jumlah Penduduk" },
    { number: "3", label: "Dusun" },
    { number: "658", label: "Jumlah Kartu Keluarga" },
    { number: "9.48", label: "Luas Wilayah (km²)" },
  ];

  const tabs = [
    { id: "profil", label: "Profil Desa", data: profileData },
    { id: "demografi", label: "Demografi", data: demographyData },
  ];

  return (
    <>
      <Navbar />
      <Jumbotron
        title={"Desa Urai"}
        subtitle={
          "Kecamatan Ketahun, Kabupaten Bengkulu Utara, Provinsi Bengkulu"
        }
        image={"/content/bg-desa-urai.jpg"}
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
                        Desa Urai, terletak di Kecamatan Ketahun, Kabupaten
                        Bengkulu Utara, Provinsi Bengkulu, dikenal akan
                        keindahan alamnya yang masih alami. Salah satu daya
                        tarik utamanya adalah pantai Urai Paradise, destinasi
                        wisata yang populer sejak dibuka pada awal 2023. Dengan
                        biaya masuk yang terjangkau, pengunjung dapat menikmati
                        pemandangan pantai yang memukau. Akses ke desa ini mudah
                        melalui Jalan Lintas Barat Sumatera dengan rute
                        Bengkulu-Lais-Urai-Ketahun, menjadikannya tujuan yang
                        menarik bagi wisatawan.
                      </p>
                      <p className="text-justify">
                        Masyarakat Desa Urai dikenal ramah dan sangat menjaga
                        nilai-nilai tradisional. Mereka sering mengadakan acara
                        sosial dan budaya, seperti perayaan adat dan kegiatan
                        kemasyarakatan, yang memperkuat semangat gotong royong.
                        Tradisi lokal yang masih terjaga menambah daya tarik
                        desa ini sebagai tempat yang kaya akan budaya dan
                        kebersamaan.
                      </p>
                      <p className="text-justify">
                        Mata pencaharian utama penduduk Desa Urai adalah
                        pertanian dan perikanan, yang menjadi tulang punggung
                        ekonomi lokal. Lahan pertanian dan aktivitas perikanan
                        mendominasi wilayah ini, mendukung kesejahteraan
                        masyarakat. Selain itu, potensi wisata seperti Urai
                        Paradise terus dikembangkan untuk meningkatkan
                        perekonomian.
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13098.539157952739!2d101.844231237232!3d-3.403955086381379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e33e9cb74c593c7%3A0x9676c9593e06a7a0!2sKantor%20desa%20urai!5e1!3m2!1sen!2sid!4v1751899930059!5m2!1sen!2sid"
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
