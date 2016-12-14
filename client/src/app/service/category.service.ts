/**
 * Created by yevheniis on 12/13/16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

  private headers = new Headers({'Content-Type': 'text/html;charset=UTF-8'});
  private categoryUrl = 'api/topic/category/all';

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.categoryUrl)
      .map(response => response.json())
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
