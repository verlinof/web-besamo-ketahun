import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Jumbotron({ title, subtitle, image }) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image} // Ganti dengan path gambar sunset/landscape
          alt="Background Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl">
          {/* Main Title */}
          <h1 className="text-white text-center font-bold mb-6 leading-tight">
            <span className="block text-3xl sm:text-4xl lg:text-5xl mb-2">
              {title}
            </span>

            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-medium text-lg sm:text-lg lg:text-xl">
                {subtitle}
              </span>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
