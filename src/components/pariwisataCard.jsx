import { useState, useEffect } from "react";
import Card from "@/items/card";
import { createClient } from "contentful";

// Contentful client configuration
const Token = process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY;
const client = createClient({
  space: "qw435lrccd02",
  accessToken: Token, // Simpan di .env.local
  environment: "master", // atau 'main' sesuai environment Anda
});

export default function PariwisataCards() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data dari Contentful
  useEffect(() => {
    async function fetchContentfulData() {
      try {
        const entries = await client.getEntries({
          content_type: "pariwisataBudaya",
          order: "-sys.createdAt", // Sort dari terbaru
        });

        const formattedArticles = entries.items.map((item) => ({
          id: item.sys.id,
          desa: item.fields.desa,
          createdAt: new Date(item.sys.createdAt),
          title: item.fields.title,
          banner: item.fields.banner
            ? `https:${item.fields.banner.fields.file.url}`
            : null,
          type: item.fields.type,
        }));

        setArticles(formattedArticles);
      } catch (err) {
        console.error("Error fetching Contentful data:", err);
        setError(err.message);

        // // Fallback ke data dummy jika gagal fetch
        // setArticles([
        //   {
        //     id: 1,
        //     banner:
        //       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
        //     title: "Keindahan Pantai Sunset di Bengkulu Utara",
        //     type: "Pariwisata",
        //     desa: "Desa Urai",
        //     createdAt: new Date("2024-06-25"),
        //   },
        //   {
        //     id: 2,
        //     banner:
        //       "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
        //     title: "Festival Budaya Tradisional Ketahun",
        //     type: "Budaya",
        //     desa: "Desa Pasar Ketahun",
        //     createdAt: new Date("2024-06-20"),
        //   },
        //   {
        //     id: 3,
        //     banner:
        //       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
        //     title: "Kuliner Khas Bengkulu yang Wajib Dicoba",
        //     type: "Pariwisata",
        //     desa: "Desa Urai",
        //     createdAt: new Date("2024-06-18"),
        //   },
        //   {
        //     id: 4,
        //     banner:
        //       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
        //     title: "Trekking di Bukit Hijau Ketahun",
        //     type: "Pariwisata",
        //     desa: "Desa Urai",
        //     createdAt: new Date("2024-06-15"),
        //   },
        //   {
        //     id: 5,
        //     banner:
        //       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
        //     title: "Seni Kerajinan Tangan Tradisional",
        //     type: "Budaya",
        //     desa: "Desa Pasar Ketahun",
        //     createdAt: new Date("2024-06-12"),
        //   },
        //   {
        //     id: 6,
        //     banner:
        //       "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=250&fit=crop",
        //     title: "Air Terjun Tersembunyi di Hutan Ketahun",
        //     type: "Budaya",
        //     desa: "Desa Pasar Ketahun",
        //     createdAt: new Date("2024-06-10"),
        //   },
        // ]);
      } finally {
        setLoading(false);
      }
    }

    fetchContentfulData();
  }, []);

  // Sort articles by createdAt (newest first)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artikel Pariwisata & Budaya
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi Pariwisata, dan budaya khas Ketahun, Bengkulu Utara
          </p>
          {error && (
            <p className="text-yellow-600 text-sm mt-2">Error: {error}</p>
          )}
        </div>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Artikel Pariwisata & Budaya
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Jelajahi Pariwisata, dan budaya khas Ketahun, Bengkulu Utara
        </p>
        {error && (
          <p className="text-yellow-600 text-sm mt-2">Error: {error}</p>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedArticles.map(({ id, desa, createdAt, title, banner, type }) => (
          <Card
            key={id}
            id={id}
            desa={desa}
            createdAt={createdAt}
            title={title}
            banner={banner}
            type={type}
          />
        ))}
      </div>

      {/* Load More Button
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Muat Artikel Lainnya
        </button>
      </div> */}
    </div>
  );
}
