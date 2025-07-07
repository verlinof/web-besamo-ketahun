import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/icon/LOGOKETAHUN.ico" />
        <meta name="title" content="Besamo Ketahun" />
        <meta
          name="description"
          content="KKN-PPM UGM Besamo Ketahun 2025 di Desa Urai dan Pasar Ketahun, Bengkulu Utara. Fokus pada pemberdayaan masyarakat, pengembangan komoditas lokal, dan digitalisasi pariwisata."
        />
        <meta
          name="keywords"
          content="Ketahun, ketahun, Bengkulu, tourism, culture, UMKM, pariwisata, budaya, besamo ketahun, website pariwisata, website budaya"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
