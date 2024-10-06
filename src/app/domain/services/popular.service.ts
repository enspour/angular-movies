import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable, shareReplay } from 'rxjs';

import { MoviesApi } from '../../infrastructure/apis';

import { FullMovie } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PopularService {
  private moviesApi = inject(MoviesApi);

  private cacheSize = 1;
  private cache$: Observable<FullMovie[]> | null = null;

  private popularIds = ['tt2975590', 'tt6263850', 'tt0944947'];

  public getPopular() {
    if (!this.cache$) {
      const popular = this.popularIds.map((id) => this.moviesApi.getById(id));
      this.cache$ = forkJoin(popular).pipe(shareReplay(this.cacheSize));
    }

    return this.cache$;
  }
}
