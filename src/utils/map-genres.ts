import { GenreInterface } from '@interfaces/Movie.interfaces';

const mapGenres = (genres: GenreInterface[]) =>
  genres.map((genre) => ({
    text: genre.name,
    url: `/genres/${genre.id}`,
  }));

export default mapGenres;
