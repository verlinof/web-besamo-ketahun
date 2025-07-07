import React from "react";
import Image from "next/image";
import Link from "next/link";

const LokasiPengabdian = () => {
  return (
    <div className="bg-gradient-to-br px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Lokasi Pengabdian
          </h1>
          <div className="w-24 h-1 bg-main-blue rounded-lg mx-auto"></div>
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
            {/* Desa Pasar Ketahun Card */}
            <Link href="/tentang-desa/pasarketahun">
              <div className="group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/content/bg-desa-ps-ketahun.jpg"
                      alt="Desa Wogo - Traditional ceremony with people in traditional red clothing and Indonesian flag"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Desa Pasar Ketahun
                    </h2>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desa Urai Card */}
            <Link href="/tentang-desa/urai">
              <div className="group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/content/bg-desa-urai.jpg"
                      alt="Desa Wae Ia - Aerial view of village with hills and traditional houses"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Desa Urai
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokasiPengabdian;
