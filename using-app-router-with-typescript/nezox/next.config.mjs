/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export', // Use export since it's a static site
};

export default nextConfig;
