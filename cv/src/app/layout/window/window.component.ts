import { Component } from '@angular/core';
import { DecoratedTextComponent } from '../../components/decorated-text/decorated-text.component';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [ DecoratedTextComponent ],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss'
})
export class WindowComponent {
  header: string = "My Core Skills";
}
