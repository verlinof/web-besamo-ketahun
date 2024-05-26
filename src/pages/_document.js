import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-black scroll-smooth">
      <Head>
        <title>Verlino Fajri: Portofolio</title>
        <link rel="icon" href="/web_icon.ico" />
        <meta name="title" content="Verlino Fajri: Portofolio" />
        <meta name="description" content="Hello, my name is Verlino Raya Fajri, 
        and I am a student at the Vocational School of Gadjah Mada University, 
        majoring in Software Engineering Technology and Backend Developer. I have a strong passion for 
        technology and a keen interest in staying updated with the latest 
        advancements in the field." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
