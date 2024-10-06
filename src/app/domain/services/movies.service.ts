import { inject, Injectable } from '@angular/core';

import { MoviesApi } from '../../infrastructure/apis';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesApi = inject(MoviesApi);

  public getMovie(id: string) {
    return this.moviesApi.getById(id);
  }
}
