/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://postulaciones.solutoria.cl/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
