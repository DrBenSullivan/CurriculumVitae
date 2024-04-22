import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component';
import { WindowComponent } from './layout/window/window.component';
import { TabComponent } from './components/tab/tab.component';
import { Page } from './interfaces/page';
import { ContentService } from './services/content.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, FooterComponent, WindowComponent, TabComponent, NgFor ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  pagesArray: Page[] = [];

  constructor (private contentService: ContentService) { }

  ngOnInit(): void {
    this.pagesArray = this.contentService.fetchPagesArray();
    console.log(this.pagesArray);
  }

}
