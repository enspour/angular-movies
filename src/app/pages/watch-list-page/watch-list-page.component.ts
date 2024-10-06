import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { WatchListService } from '../../domain/services/watch-list.service';

import { MovieCardComponent } from '../../domain/components/ui/movie-card/movie-card.component';

@Component({
  selector: 'app-watch-list-page',
  standalone: true,
  imports: [AsyncPipe, MovieCardComponent],
  templateUrl: './watch-list-page.component.html',
  styleUrl: './watch-list-page.component.scss',
})
export class WatchListPageComponent {
  private watchListService = inject(WatchListService);

  public watchList$ = this.watchListService.getWatchList();
}
