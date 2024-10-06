import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { MoviesService } from '../../domain/services/movies.service';
import { WatchListService } from '../../domain/services/watch-list.service';

import { ButtonComponent } from '../../domain/components/ui/button/button.component';
import { MovieGenresComponent } from '../../domain/components/ui/movie-genres/movie-genres.component';
import { MoviePosterComponent } from '../../domain/components/ui/movie-poster/movie-poster.component';
import { MovieRatingsComponent } from '../../domain/components/ui/movie-ratings/movie-ratings.component';
import { MovieTeamComponent } from '../../domain/components/ui/movie-team/movie-team.component';

import { LoadingStatus, Movie } from '../../domain/interfaces';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [
    AsyncPipe,
    MoviePosterComponent,
    MovieRatingsComponent,
    MovieGenresComponent,
    MovieTeamComponent,
    ButtonComponent,
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent {
  private route = inject(ActivatedRoute);

  private moviesService = inject(MoviesService);
  private watchListService = inject(WatchListService);

  public loadingStatus = signal<LoadingStatus>('pending');

  public movie$ = this.route.params.pipe(
    switchMap((params) => this.moviesService.getMovie(params['id'])),
    tap(() => this.loadingStatus.set('done')),
  );

  public inWatchList$ = this.route.params.pipe(
    switchMap((params) => this.watchListService.inWatchList(params['id'])),
  );

  public onAddToWatchList(movie: Movie) {
    this.watchListService.addMovie(movie);
  }

  public onRemoveFromWatchList(movie: Movie) {
    this.watchListService.removeMovie(movie);
  }
}
