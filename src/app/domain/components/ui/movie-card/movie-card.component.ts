import { Component, input, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MoviePosterComponent } from '../movie-poster/movie-poster.component';

import { Movie } from '../../../interfaces';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink, MoviePosterComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent implements OnInit {
  public movie = input.required<Movie>();
  public isGlow = input(false);

  public loadEvent = output();

  ngOnInit(): void {
    this.loadEvent.emit();
  }
}
