import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, shareReplay, tap } from 'rxjs';

import { MoviesApi } from '../../infrastructure/apis';
import { LocalStorageService } from '../../infrastructure/local-storage';

import { LoadingStatus, Movie } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private localStorageService = inject(LocalStorageService);

  private movieApi = inject(MoviesApi);

  private watchList = new BehaviorSubject<Movie[]>([]);
  private watchList$ = this.watchList.pipe(shareReplay(1));

  private loadingStatus = new BehaviorSubject<LoadingStatus>('idle');
  public loadingStatus$ = this.loadingStatus.asObservable();

  public getWatchList() {
    if (this.loadingStatus.value === 'idle') {
      const watchListIds = this.localStorageService.get('__v1/watch-list');
      const watchList = watchListIds.map((id) => this.movieApi.getById(id));

      forkJoin(watchList)
        .pipe(tap(() => this.loadingStatus.next('done')))
        .subscribe({
          next: (values) => this.watchList.next(values),
          error: (error) => this.watchList.error(error),
        });
    }

    return this.watchList$;
  }

  public inWatchList(id: string) {
    return this.localStorageService
      .subscribe('__v1/watch-list')
      .pipe(map((ids) => ids.some((value) => value === id)));
  }

  public addMovie(movie: Movie) {
    const watchList = [...this.watchList.value, movie];
    const watchListIds = watchList.map((m) => m.id);

    this.watchList.next(watchList);
    this.localStorageService.set('__v1/watch-list', watchListIds);
  }

  public removeMovie(movie: Movie) {
    const watchList = this.watchList.value.filter((m) => m.id !== movie.id);
    const watchListIds = watchList.map((m) => m.id);

    this.watchList.next(watchList);
    this.localStorageService.set('__v1/watch-list', watchListIds);
  }
}
