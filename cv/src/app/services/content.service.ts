import { Injectable } from '@angular/core';
import contentJSON from '../../assets/content.json';
import { Page } from '../interfaces/page';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor() { }


  fetchPagesArray(): Page[] {

    const pagesArray = [];

    for(let i=0; i<contentJSON.length; i++) {
      const pageJSONObject = contentJSON[i];
      pagesArray.push(pageJSONObject);
    }

    return pagesArray;

  }

  fetchPageObject(id: number): Page {
    
    const pageObject = contentJSON[id];
    return pageObject

  }

  
}
