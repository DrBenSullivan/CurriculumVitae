import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { Input, Output } from '@angular/core';
import { Page } from '../../interfaces/page';
import { DecoratedTextComponent } from '../decorated-text/decorated-text.component';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [ RouterModule, DecoratedTextComponent, RouterLinkActive ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent implements OnInit {
  @Input() pageObject!: Page;
  @Output() changePage: EventEmitter<any> = new EventEmitter();

  page!: Page;

  openPage() {
    this.changePage.emit(null);
  }

  constructor () {
  }

  ngOnInit(): void {
    this.page = this.pageObject;
    console.log(this.page);
  }
}
