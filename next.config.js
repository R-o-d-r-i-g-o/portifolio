const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      minify: true,
      ssr: true
    },
  },
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
    typedRoutes: true
  }
}

module.exports = nextTranslate(nextConfig)
