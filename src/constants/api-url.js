const { THE_MOVIE_DB_API_KEY } = process.env;

const API_BASE_URL = 'https://api.themoviedb.org/3';

const constructUrl = (path) => {
  return `${API_BASE_URL}${path}?api_key=${THE_MOVIE_DB_API_KEY}`;
};

const API_URL = {
  nowPlaying: constructUrl('/movie/now_playing'),
  genres: constructUrl('/genre/movie/list'),
  movieDetail: constructUrl('/movie/%s'),
};

export default API_URL;
