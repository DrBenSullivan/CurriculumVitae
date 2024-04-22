import { Component } from '@angular/core';
import { DecoratedTextComponent } from '../../components/decorated-text/decorated-text.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ DecoratedTextComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  name = "Benjamin Sullivan";
}
