import {Component, OnInit} from '@angular/core';

import { Topic } from './model/topic.model';
import { TopicService } from './service/topic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TopicService]
})
export class AppComponent implements OnInit {

  topics: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopics().then(topics => this.topics = topics);
  }
}
