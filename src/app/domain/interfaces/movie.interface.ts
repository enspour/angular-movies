export type MovieType = 'movie' | 'series' | 'episode';
export type MovieRating = {
  source: string;
  value: string;
};

export interface ShortMovie {
  id: string;
  title: string;
  year: number;
  type: MovieType;
  poster: string;
}

export interface FullMovie extends ShortMovie {
  plot: string;
  runtime: number;
  rated: string;
  released: string;
  director: string;
  actors: string[];
  writers: string[];
  genres: string[];
  awards: string;
  language: string;
  country: string;
  ratings: MovieRating[];
}

export type Movie = ShortMovie | FullMovie;
