import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1Panel/OpenResty serves this project as static files from the site root.
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
