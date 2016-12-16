/**
 * Created by employee on 12/7/16.
 */
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Topic} from "../model/topic.model";
import {Observable} from "rxjs";

@Injectable()
export class TopicService {

  //private headers = new Headers({'Content-Type': 'text/html;charset=UTF-8'});
  private topicsUrl = 'api/topic/all';
  private addTopicUrl = 'api/topic/add';

  constructor(private http: Http) { }

  getTopics() {
    return this.http.get(this.topicsUrl)
      .map(response => response.json())
  }

  addTopic(obj: Object): Promise<Topic> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post(this.addTopicUrl, JSON.stringify(obj), {headers: headers})
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

}
