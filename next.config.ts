/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // التحذيرات (Warnings) مش هتوقف الـ Build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;