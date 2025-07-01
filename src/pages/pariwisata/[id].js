// pages/pariwisata/[id].js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function PariwisataDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [client, setClient] = useState(null);

  // Initialize Contentful client
  useEffect(() => {
    const initializeClient = () => {
      const token = process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY;

      if (token) {
        const contentfulClient = createClient({
          space: "qw435lrccd02",
          accessToken: token,
          environment: "master",
        });
        setClient(contentfulClient);
      } else {
        console.error("Contentful API token not found");
        setError("Konfigurasi API tidak ditemukan");
        setLoading(false);
      }
    };

    initializeClient();
  }, []);

  // Fetch article detail
  useEffect(() => {
    if (!client || !id) return;

    async function fetchArticleDetail() {
      try {
        // Fetch entry dengan include untuk mendapatkan referenced assets
        const entry = await client.getEntry(id, {
          include: 2, // Include referenced entries/assets
        });

        if (entry.sys.contentType.sys.id !== "pariwisataBudaya") {
          throw new Error("Content type tidak sesuai");
        }

        // Process content berdasarkan tipe field
        let processedContent = "";

        if (entry.fields.content) {
          // Jika content adalah Rich Text
          if (entry.fields.content.nodeType) {
            try {
              processedContent = documentToHtmlString(entry.fields.content);
            } catch (richTextError) {
              processedContent =
                entry.fields.content.content?.[0]?.content?.[0]?.value || "";
            }
          }
          // Jika content adalah plain text
          else if (typeof entry.fields.content === "string") {
            processedContent = entry.fields.content;
          }
          // Jika content adalah object lain
          else {
            console.log("Content structure:", entry.fields.content);
            processedContent = JSON.stringify(entry.fields.content, null, 2);
          }
        }
        // Fallback ke description jika content tidak ada
        else if (entry.fields.description) {
          if (typeof entry.fields.description === "string") {
            processedContent = entry.fields.description;
          } else {
            processedContent = documentToHtmlString(entry.fields.description);
          }
        }

        const articleData = {
          id: entry.sys.id,
          title: entry.fields.title || "Judul tidak tersedia",
          desa: entry.fields.desa || "Desa tidak tersedia",
          type: entry.fields.type || "Pariwisata",
          createdAt: new Date(entry.sys.createdAt),
          updatedAt: new Date(entry.sys.updatedAt),
          banner: entry.fields.banner
            ? {
                url: entry.fields.banner.fields?.file?.url
                  ? `https:${entry.fields.banner.fields.file.url}`
                  : null,
                alt:
                  entry.fields.banner.fields?.title ||
                  entry.fields.title ||
                  "Banner",
                width: entry.fields.banner.fields?.file?.details?.image?.width,
                height:
                  entry.fields.banner.fields?.file?.details?.image?.height,
              }
            : null,
          content: processedContent,
        };

        setArticle(articleData);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(`Error: ${err.message}`);

        // Redirect ke /pariwisata jika tidak ditemukan
        setTimeout(() => {
          router.push("/pariwisata");
        }, 3000);
      } finally {
        setLoading(false);
      }
    }

    fetchArticleDetail();
  }, [client, id, router]);

  const getTypeColor = (type) => {
    const colors = {
      Budaya: "bg-purple-100 text-purple-800",
      Pariwisata: "bg-orange-100 text-orange-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😞</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Artikel Tidak Ditemukan
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <p className="text-md text-gray-500 mb-4">
            Mengalihkan ke halaman pariwisata dalam 3 detik...
          </p>
          <Link
            href="/pariwisata"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kembali ke Pariwisata
          </Link>
        </div>
      </div>
    );
  }

  // Article content
  if (!article) return null;

  const formatDate = (date) => {
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header/Banner */}
        <div className="relative h-96 md:h-96 bg-gradient-to-b from-blue-600 to-purple-600">
          {article.banner?.url && (
            <Image
              src={article.banner.url}
              alt={article.banner.alt}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden -mt-20 relative z-10">
            {/* Article Header */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span
                  className={
                    "bg-blue-100 text-md font-medium px-3 py-1 rounded-full " +
                    getTypeColor(article.type)
                  }
                >
                  {article.type}
                </span>
                <span className="text-gray-600 text-md">📍 {article.desa}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="px-6 md:px-8 pb-8">
              <div className="prose prose-lg max-w-none text-xl">
                {article.content ? (
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: article.content,
                    }}
                  />
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-gray-600 italic text-xl">
                      Konten artikel belum tersedia.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
