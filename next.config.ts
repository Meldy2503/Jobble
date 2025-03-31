import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  reactStrictMode: true,
  images: {
    domains: ["www.arbeitnow.com"], // Allows images from this domain
  },
};

export default nextConfig;
