import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Ensure assets load correctly on GitHub Pages by using relative URLs
  assetPrefix: "./",
  // Avoid remote image optimization during static export (GH Pages)
  images: {
    unoptimized: true,
  },
  // Helps static hosting like GH Pages serve `index.html` in folders
  trailingSlash: true,
};

export default nextConfig;
