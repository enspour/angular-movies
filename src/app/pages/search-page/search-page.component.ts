import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { SearchService } from '../../domain/services/search.service';

import { MovieCardComponent } from '../../domain/components/ui/movie-card/movie-card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [AsyncPipe, MovieCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  private route = inject(ActivatedRoute);

  private searchService = inject(SearchService);

  public searchResult$ = this.route.params.pipe(
    switchMap((params) => this.searchService.search(params['text'])),
  );

  public load() {
    this.searchService.load();
  }
}
