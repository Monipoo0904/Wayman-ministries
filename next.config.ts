import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  redirects() {
    return [{ source: "/ministries", destination: "/", permanent: true }];
  },
};

export default nextConfig;
