/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net", // Contentful images
      "images.unsplash.com", // Unsplash images (untuk fallback)
      "assets.ctfassets.net",
    ],
  },
};

export default nextConfig;
