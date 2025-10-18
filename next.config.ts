import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // local images only; keep default loader for public/ usage
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    // Configure qualities to avoid warnings (70 is used in the codebase)
    qualities: [70, 75, 85, 90, 100],
    // default quality next/image will use when none is provided
    minimumCacheTTL: 60,
    // Configure to handle special characters in filenames
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Disable image optimization in production if special characters cause issues
    // You can enable this if the 400 errors persist
    // unoptimized: true,
  },
  
  // Add security headers including CSP
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://challenges.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://cloudflareinsights.com https://*.cloudflare.com",
              "frame-src 'self' https://challenges.cloudflare.com",
              "worker-src 'self' blob:",
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      // Allow proper handling of images with special characters
      {
        source: '/sun7piscine-photos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
