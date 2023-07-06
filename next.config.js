/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dm6tf3fjz/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.cloudflare.steamstatic.com',
          port: '',
          pathname: '/steam/apps/',
        }
        
      ],
    },
  }

  module.exports = {
    images: {
      domains: ['cdn.cloudflare.steamstatic.com'],
    },
  };