import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { ButtonLinkComponent } from '../../../ui/button-link/button-link.component';
import { SearchInputComponent } from '../../../ui/search-input/search-input.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ButtonLinkComponent,
    SearchInputComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private router = inject(Router);

  public searchControl = new FormControl('', { nonNullable: true });

  public onSearch() {
    this.router.navigateByUrl(`/search/${this.searchControl.value}`);
  }
}
