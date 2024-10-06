import { Component, input, signal } from '@angular/core';

import { Movie } from '../../../interfaces';

@Component({
  selector: 'app-movie-poster',
  standalone: true,
  imports: [],
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.scss',
})
export class MoviePosterComponent {
  public movie = input.required<Movie>();

  public isRounded = input(false);
  public isRoundedTop = input(false);
  public isRoundedBottom = input(false);

  public isGlow = input(false);

  public isError = signal(false);
}
