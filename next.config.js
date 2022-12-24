const { THE_MOVIE_DB_API_KEY } = process.env;
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Rewrites request to hide original server url
    return [
      {
        source: '/data/:path*',
        destination: `${API_BASE_URL}/:path*?api_key=${THE_MOVIE_DB_API_KEY}`,
      },
      {
        source: '/image/:path*',
        destination: `${IMAGE_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
