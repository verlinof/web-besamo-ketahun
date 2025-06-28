import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VideoProfile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div
          className="text-center mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
            Video Dokumenter
          </h2>
          <p className="font-medium text-md sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Simak video profil Desa Pasar Ketahun dan Desa Urai
          </p>
        </div>

        {/* Video Section 1 - Desa Pasar Ketahun */}
        <div className="mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Video */}
            <div
              className="w-full lg:w-2/3 order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/o3CBbsb6l4M?si=p2CxRQ0ZQqsP69th"
                  title="Video Profil Desa Pasar Ketahun"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Title Card */}
            <div
              className="w-full lg:w-1/3 order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="bg-main-blue p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Desa Pasar Ketahun
                </h3>
                <p className="text-blue-100 text-sm sm:text-base">
                  Profil Desa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section 2 - Desa Urai */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Title Card */}
            <div
              className="w-full lg:w-1/3 order-1"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="bg-main-blue p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Desa Urai
                </h3>
                <p className="text-green-100 text-sm sm:text-base">
                  Profil Desa
                </p>
              </div>
            </div>

            {/* Video */}
            <div
              className="w-full lg:w-2/3 order-2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/o3CBbsb6l4M?si=p2CxRQ0ZQqsP69th"
                  title="Video Profil Desa Urai"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="bg-main-blue rounded-2xl p-6 sm:p-8 shadow-lg max-w-4xl mx-auto text-white">
            <h4 className="text-xl sm:text-2xl font-bold mb-4">
              Tentang Video Dokumenter
            </h4>
            <p className="text-base sm:text-lg leading-relaxed">
              Video dokumenter ini menampilkan profil lengkap kedua desa lokasi
              KKN-PPM UGM, termasuk potensi wisata, komoditas lokal, dan
              kehidupan masyarakat sehari-hari yang menjadi fokus program
              pemberdayaan berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProfile;
