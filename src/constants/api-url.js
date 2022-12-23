const { THE_MOVIE_DB_API_KEY } = process.env;

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = {
  nowPlaying: `${API_BASE_URL}/movie/now_playing?api_key=${THE_MOVIE_DB_API_KEY}`,
  genres: `${API_BASE_URL}/genre/movie/list?api_key=${THE_MOVIE_DB_API_KEY}`,
};

export default API_URL;
