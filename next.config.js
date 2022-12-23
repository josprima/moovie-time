const { THE_MOVIE_DB_API_KEY } = process.env;
const API_BASE_URL = 'https://api.themoviedb.org/3';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/data/:path*',
        destination: `${API_BASE_URL}/:path*?api_key=${THE_MOVIE_DB_API_KEY}`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
