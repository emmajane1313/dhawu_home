import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emancipa.xyz",
        pathname: "/api/infura/**",
      },
    ],

    unoptimized: true,
  },
  trailingSlash: true,
  async headers() {
    const allowedOrigins = ["https://emancipa.xyz"];
    const headersConfig = allowedOrigins.map((origin) => {
      return {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: origin,
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
        ],
      };
    });

    return headersConfig;
  },
};

export default nextConfig;
