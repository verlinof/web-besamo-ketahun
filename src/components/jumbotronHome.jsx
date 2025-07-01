import Image from "next/image";

const JumbotronHome = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/content/bg-hero-home.png" // Ganti dengan path gambar sunset/landscape
          alt="Background Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl">
          {/* Header Tag */}
          <div className="mb-6" data-aos="fade-up" data-aos-duration="1000">
            <span className="inline-block text-white/90 text-lg font-medium tracking-wide">
              KKN-PPM UGM
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-white font-bold mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">
              Besamo Ketahun
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-main-blue">
              2025
            </span>
          </h1>

          {/* Theme Card */}
          <div
            className="bg-main-blue backdrop-blur-sm rounded-2xl p-6 sm:p-8 w-full shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
              Tema Besar
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed">
              "KKN Tematik di Kawasan Transmigrasi di Lagita, Kec. Ketahun, Kab.
              Bengkulu Utara: Pemberdayaan Masyarakat Berkelanjutan melalui
              Pengembangan Komoditas Lokal dan Digitalisasi Pariwisata Lokal di
              Desa Urai dan Pasar Ketahun"
            </p>
          </div>

          {/* Call to Action Buttons */}
          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Selengkapnya
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Dokumentasi
            </button>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default JumbotronHome;
