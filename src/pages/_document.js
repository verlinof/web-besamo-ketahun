import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <title>Besamo Ketahun</title>
        <link rel="icon" href="/icon/LOGOKETAHUN.ico" />
        <meta name="title" content="Besamo Ketahun" />
        <meta
          name="description"
          content="Besamo Ketahun is a website dedicated to promoting the tourism and culture of Ketahun, Bengkulu. Explore local attractions, cultural heritage, and support local businesses."
        />
        <meta
          name="keywords"
          content="Ketahun, Bengkulu, tourism, culture, local businesses, UMKM, pariwisata, budaya, besamo ketahun, website pariwisata, website budaya"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
