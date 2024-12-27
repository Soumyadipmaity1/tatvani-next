import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "randomuser.me",
      "images.pexels.com",
      "gratisography.com",
      "st.depositphotos.com",
      "static.vecteezy.com",
      "img.freepik.com" // Added domain
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
