const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
