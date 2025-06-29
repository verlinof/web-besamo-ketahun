import { Calendar, MapPin, Tag } from "lucide-react";
import Image from "next/image";

const Card = ({ id, title, banner, type, desa, createdAt }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getTypeColor = (type) => {
    const colors = {
      Budaya: "bg-purple-100 text-purple-800",
      Pariwisata: "bg-orange-100 text-orange-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div
      key={id}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
    >
      {/* Banner Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={banner}
          alt={title}
          width={400}
          height={250}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
              type
            )}`}
          >
            <Tag className="w-3 h-3 mr-1" />
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-main-blue transition-colors">
          {title}
        </h3>

        {/* Desa */}
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{desa}</span>
        </div>

        {/* Date */}
        <div className="flex items-center text-gray-500">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{formatDate(createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
