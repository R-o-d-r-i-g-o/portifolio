/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { 
    language: 'typescript',
    styledComponents: true, 
    ssr:true
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  }
}

module.exports = nextConfig
