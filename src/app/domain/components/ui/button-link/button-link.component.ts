import { Component, HostBinding, input } from '@angular/core';

export type LinkType = 'filled' | 'outlined';

@Component({
  selector: 'a[button-link]',
  standalone: true,
  imports: [],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss',
})
export class ButtonLinkComponent {
  public type = input<LinkType>('filled');

  @HostBinding('class.link--filled')
  public get IsFilled() {
    return this.type() === 'filled';
  }

  @HostBinding('class.link--outlined')
  public get IsOutlined() {
    return this.type() === 'outlined';
  }
}
