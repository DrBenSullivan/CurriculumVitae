import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../../interfaces/page';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ContentService } from '../../services/content.service';
import { DecoratedTextComponent } from '../decorated-text/decorated-text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgFor, DecoratedTextComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  page!: Page;
  headString: string = "";
  textArray: string[] = [];
  queryParams$!: Observable<any>;
  switch: string = "inactive";


  constructor( 
    private _route: ActivatedRoute,
    private contentService: ContentService 
  ) {}

  getPageData () {
    this.queryParams$ = this._route.queryParams.pipe(
      map(params => params['id'])
    );
    
    this.queryParams$.subscribe(id => {
      if (id) {
        this.page = this.contentService.fetchPageObject(id);
        this.headString = this.page.head;
        this.textArray = this.page.body;
      }
    });
  }
    
  
  ngOnInit(): void {
    this.getPageData();
    this.switch = "active";
  }


}
