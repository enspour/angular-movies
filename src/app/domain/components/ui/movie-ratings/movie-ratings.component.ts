import { Component, input } from '@angular/core';

import { FullMovie } from '../../../interfaces';

@Component({
  selector: 'app-movie-ratings',
  standalone: true,
  imports: [],
  templateUrl: './movie-ratings.component.html',
  styleUrl: './movie-ratings.component.scss',
})
export class MovieRatingsComponent {
  public movie = input.required<FullMovie>();
}
