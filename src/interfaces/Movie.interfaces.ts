export interface MovieInterface {
  id: number;
  title: string;
  formattedTitle: string;
  overview: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  genres: GenreInterface[];
  poster_path: string;
  backdrop_path: string;
  vote_count: number;
  status: string;
  spoken_languages: {
    english_name: string;
    name: string;
  }[];
  budget: number;
  production_companies: {
    id: 574;
    name: string;
  }[];
}

export interface GenreInterface {
  id: number;
  name: string;
}
