import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://ucarecdn.com/**")],
  },
};

export default nextConfig;
