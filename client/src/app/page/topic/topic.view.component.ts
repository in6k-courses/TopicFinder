/**
 * Created by yevheniis on 12/9/16.
 */
import {Component, ChangeDetectionStrategy, Input, NgZone} from '@angular/core';
import {TopicService} from "../../service/topic.service";
import {Topic} from "../../model/topic.model";

@Component({
    selector: 'topic-view',
    templateUrl: './topic.view.component.html',
    styleUrls: ['./topic.view.component.css'],
    providers: [TopicService]
})
export class TopicViewComponent {

  topics: Topic[] = [];

  constructor(private topicService: TopicService) { }

  applyStatusFilter(statusFilter: string): void {
    console.log('applyStatusFilter');
    let filteredTopics = [];
    switch (statusFilter)
    {
      case 'active' :
        console.log('active');
        for (let topic of this.topics) {
          console.log(topic.status); // 9,2,5
          if (topic.status == true) {
            filteredTopics.push(topic);
          }
        }
        break;
      case 'archive' :
        console.log('archive');
        for (let topic of this.topics) {
          console.log(topic.status); // 9,2,5
          if (topic.status == false) {
            filteredTopics.push(topic);
          }
        }
        break;
      default:
        filteredTopics = this.topics;
    }
    this.topics = filteredTopics;
    console.log(this.topics);
    console.log(this.topics);
  }

  getTopics(status: string) {
    this.topicService.getTopics().subscribe(
      topics => this.topics = topics,
      error => console.error('Error'),
      () => this.applyStatusFilter(status)
    )
  }

  ngOnInit(): void {
    this.getTopics('all');
  }
}
