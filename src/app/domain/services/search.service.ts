import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, merge, scan, Subject, switchMap } from 'rxjs';

import { MoviesApi } from '../../infrastructure/apis';

import { ShortMovie } from '../interfaces';

interface SearchConfig {
  text: string;
  page: number;
}

interface SearchResult {
  total: string;
  movies: ShortMovie[];
}

const initialConfig: SearchConfig = {
  text: '',
  page: 1,
};

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private moviesApi = inject(MoviesApi);

  private reset = new Subject<void>();

  private config = new BehaviorSubject(initialConfig);
  public config$ = this.config.asObservable();

  public result$ = merge(
    this.reset.pipe(map(resetHandler)),
    this.config.pipe(
      switchMap(({ text, page }) => this.moviesApi.search(text, page)),
      map(accumulateHandler),
    ),
  ).pipe(scan((acc, handler) => handler(acc), resetHandler()()));

  public search(text: string) {
    this.reset.next();
    this.config.next({ text, page: 1 });

    return this.result$;
  }

  public load() {
    this.config.next({
      ...this.config.value,
      page: this.config.value.page + 1,
    });
  }
}

const accumulateHandler = (result: SearchResult) => {
  return (acc: SearchResult): SearchResult => ({
    total: result.total,
    movies: [...acc.movies, ...result.movies],
  });
};

const resetHandler = () => {
  return (): SearchResult => ({
    total: '',
    movies: [],
  });
};
