/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  allowedDevOrigins: ['127.0.0.1']
};

export default nextConfig;
