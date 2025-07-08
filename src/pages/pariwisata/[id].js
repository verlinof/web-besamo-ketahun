import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Calendar } from "lucide-react";

// Custom render options for rich text
const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      if (!file) return null;

      if (file.contentType.includes("image")) {
        return (
          <div className="my-4">
            <Image
              src={`https:${file.url}`}
              alt={title || "Contentful asset"}
              width={file.details?.image?.width || 800}
              height={file.details?.image?.height || 400}
              className="rounded-lg"
            />
          </div>
        );
      }
      return null;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
        {children}
      </h2>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  renderText: (text) =>
    text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]),
};

export default function PariwisataDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize Contentful client
  useEffect(() => {
    const client = createClient({
      space: "qw435lrccd02",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY,
      environment: "master",
    });

    async function fetchArticleDetail() {
      if (!id) return;

      try {
        const entry = await client.getEntry(id, { include: 2 });

        if (entry.sys.contentType.sys.id !== "pariwisataBudaya") {
          throw new Error("Content type tidak sesuai");
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
                url: `https:${entry.fields.banner.fields?.file?.url}`,
                alt:
                  entry.fields.banner.fields?.title ||
                  entry.fields.title ||
                  "Banner",
                width: entry.fields.banner.fields?.file?.details?.image?.width,
                height:
                  entry.fields.banner.fields?.file?.details?.image?.height,
              }
            : null,
          content: entry.fields.content,
        };

        setArticle(articleData);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(`Error: ${err.message}`);
        setTimeout(() => router.push("/pariwisata"), 3000);
      } finally {
        setLoading(false);
      }
    }

    fetchArticleDetail();
  }, [id, router]);

  const getTypeColor = (type) => {
    const colors = {
      Budaya: "bg-purple-100 text-purple-800",
      Pariwisata: "bg-orange-100 text-orange-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

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

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden -mt-20 relative z-10">
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
                <span className="text-gray-600 text-lg">📍{article.desa}</span>
                {/* Date */}
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-lg">
                    {formatDate(article.createdAt)}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
            </div>

            <div className="px-6 md:px-8 pb-8">
              <div className="prose prose-lg max-w-none text-xl">
                {article.content ? (
                  documentToReactComponents(article.content, renderOptions)
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
