import { Component, input } from '@angular/core';

import { FullMovie } from '../../../interfaces';

@Component({
  selector: 'app-movie-genres',
  standalone: true,
  imports: [],
  templateUrl: './movie-genres.component.html',
  styleUrl: './movie-genres.component.scss',
})
export class MovieGenresComponent {
  public movie = input.required<FullMovie>();
}
