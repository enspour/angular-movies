import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, of, switchMap, throwError } from 'rxjs';

import { FullMovieDto, SearchDto } from './dto';

import { toFullMovie, toShortMovies } from './utils';

import { environment } from '../../../../environments/environment';

const { apiKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class Api {
  private httpClient = inject(HttpClient);

  public search(text: string, page: number = 1) {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${text}&page=${page}`;
    return this.httpClient.get<SearchDto>(url).pipe(
      switchMap((response) =>
        response.Response === 'True'
          ? of({
              total: response.totalResults,
              movies: toShortMovies(response.Search),
            })
          : throwError(() => new Error(response.Error)),
      ),
    );
  }

  public getById(id: string) {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    return this.httpClient
      .get<FullMovieDto>(url)
      .pipe(map((movie) => toFullMovie(movie)));
  }
}
