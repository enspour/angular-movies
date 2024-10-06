import { Component, input } from '@angular/core';

import { FullMovie } from '../../../interfaces';

@Component({
  selector: 'app-movie-team',
  standalone: true,
  imports: [],
  templateUrl: './movie-team.component.html',
  styleUrl: './movie-team.component.scss',
})
export class MovieTeamComponent {
  public movie = input.required<FullMovie>();
}
