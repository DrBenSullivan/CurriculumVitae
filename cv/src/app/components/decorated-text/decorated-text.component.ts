import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-decorated-text',
  standalone: true,
  imports: [ NgFor, NgIf ],
  templateUrl: './decorated-text.component.html',
  styleUrl: './decorated-text.component.scss'
})
export class DecoratedTextComponent {
  @Input() text: string = "";
  @Input() decoratedStyle: any = {};
  @Input() wordStyle: any = {};

  get words(): string[] {
    return this.text ? this.text.split(' ') : [];
  }

}
