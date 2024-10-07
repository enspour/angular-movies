import { Movie } from '../../../interfaces';

export const MOCKED_MOVIE: Movie = {
  id: 'tt6263850',
  type: 'movie',
  title: 'Deadpool & Wolverine',
  poster:
    'https://m.media-amazon.com/images/M/MV5BZmQxZWM5MzgtY2EzZC00OGUxLWE0Y2EtMDIwOTFlNmQ5MWMyXkEyXkFqcGc@._V1_SX300.jpg',
  year: 2024,
  director: 'Shawn Levy',
  actors: ['Ryan Reynolds', ' Hugh Jackman', ' Emma Corrin'],
  writers: ['Ryan Reynolds', ' Rhett Reese', ' Paul Wernick'],
  awards: '4 wins & 1 nomination',
  language: 'English, French, Spanish',
  country: 'United States, United Kingdom, Australia, New Zealand, Canada',
  runtime: 128,
  rated: 'R',
  released: '26 Jul 2024',
  plot: 'Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.',
  genres: ['Action', ' Adventure', ' Comedy'],
  ratings: [
    {
      source: 'Internet Movie Database',
      value: '8.0/10',
    },
    {
      source: 'Rotten Tomatoes',
      value: '78%',
    },
  ],
};
