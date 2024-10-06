import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { PopularService } from '../../domain/services/popular.service';

import { ButtonLinkComponent } from '../../domain/components/ui/button-link/button-link.component';
import { MovieCardComponent } from '../../domain/components/ui/movie-card/movie-card.component';
import { SearchInputComponent } from '../../domain/components/ui/search-input/search-input.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    ButtonLinkComponent,
    SearchInputComponent,
    MovieCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private router = inject(Router);
  private popularService = inject(PopularService);

  public searchControl = new FormControl('', { nonNullable: true });

  public popularMovies$ = this.popularService.getPopular();

  public onSearch() {
    this.router.navigateByUrl(`/search/${this.searchControl.value}`);
  }
}
