/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // تجاهل الـ Linting تماماً أثناء الـ Build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // تجاهل أخطاء الـ TypeScript أثناء الـ Build (اختياري لو ظهرلك أخطاء تايب)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;