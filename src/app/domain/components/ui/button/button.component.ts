import { Component, HostBinding, input } from '@angular/core';

export type ButtonType = 'filled' | 'outlined';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public type = input<ButtonType>('filled');

  @HostBinding('class.button--filled')
  public get IsFilled() {
    return this.type() === 'filled';
  }

  @HostBinding('class.button--outlined')
  public get IsOutlined() {
    return this.type() === 'outlined';
  }
}
