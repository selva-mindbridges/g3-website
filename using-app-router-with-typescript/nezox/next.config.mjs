/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
