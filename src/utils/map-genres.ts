import { GenreInterface } from '@interfaces/Movie.interfaces';

const mapGenres = (genres: GenreInterface[]) =>
  genres.map((genre) => ({
    text: genre.name,
    url: `/movies?genre=${genre.id}`,
  }));

export default mapGenres;
