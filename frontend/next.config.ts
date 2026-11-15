import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/MatheusPiercing',
  images:{
    unoptimized: true,
  },
};

export default nextConfig;
