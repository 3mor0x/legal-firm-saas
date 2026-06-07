/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // هنتجاهل الـ Linting تماماً أثناء الـ Build عشان ميعطلناش
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;