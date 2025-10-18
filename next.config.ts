import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // local images only; keep default loader for public/ usage
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // default quality next/image will use when none is provided
    minimumCacheTTL: 60,
    // Allow unoptimized images for special characters in filenames
    unoptimized: process.env.NODE_ENV === "development",
  },
  // keep other defaults
};

export default nextConfig;
