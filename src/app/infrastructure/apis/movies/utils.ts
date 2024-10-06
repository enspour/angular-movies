import { FullMovie, MovieType, ShortMovie } from '../../../domain/interfaces';
import { FullMovieDto, ShortMovieDto } from './dto';

export const toShortMovie = (dto: ShortMovieDto): ShortMovie => {
  return {
    id: dto.imdbID,
    type: dto.Type as MovieType,
    title: dto.Title,
    poster: dto.Poster,
    year: parseInt(dto.Year),
  };
};

export const toShortMovies = (dto: ShortMovieDto[]): ShortMovie[] => {
  return dto.map((movie) => toShortMovie(movie));
};

export const toFullMovie = (dto: FullMovieDto): FullMovie => {
  return {
    id: dto.imdbID,
    type: dto.Type as MovieType,
    title: dto.Title,
    poster: dto.Poster,
    year: parseInt(dto.Year),
    director: dto.Director,
    actors: dto.Actors.split(','),
    writers: dto.Writer.split(','),
    awards: dto.Awards,
    language: dto.Language,
    country: dto.Country,
    runtime: parseInt(dto.Runtime),
    rated: dto.Rated,
    released: dto.Released,
    plot: dto.Plot,
    genres: dto.Genre.split(','),
    ratings: dto.Ratings.map((r) => ({ source: r.Source, value: r.Value })),
  };
};

export const toFullMovies = (dto: FullMovieDto[]): FullMovie[] => {
  return dto.map((movie) => toFullMovie(movie));
};
