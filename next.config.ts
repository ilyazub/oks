import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos']
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
