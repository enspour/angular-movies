import {
  Component,
  ElementRef,
  input,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

type SearchInputSize = 'normal' | 'large';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent implements OnInit {
  private input = viewChild<ElementRef<HTMLInputElement>>('input');

  public searchControl = input.required<FormControl<string>>();

  public placeholder = input('');
  public size = input<SearchInputSize>('normal');

  public autofocus = input(false);

  public enterEvent = output<Event>();

  ngOnInit(): void {
    if (this.autofocus()) {
      setTimeout(this.focus.bind(this), 0);
    }
  }

  public focus() {
    this.input()?.nativeElement.focus();
  }
}
