/**
 * Created by employee on 12/7/16.
 */
import { Injectable } from '@angular/core';
import { Topic } from '../model/topic.model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TopicService {

  private headers = new Headers({'Content-Type': 'text/html;charset=UTF-8'});
  private topicsUrl = 'api/topic/all';  // URL to web api

  constructor(private http: Http) { }

  getTopics(): Promise<Topic[]> {
    console.log(this.http.get(this.topicsUrl).toString());
    return this.http.get(this.topicsUrl)
      .toPromise()
      .then(response => response.json() as Topic[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
