/**
 * Created by yevheniis on 12/12/16.
 */
import {Component, Input} from '@angular/core';
import {TopicViewComponent} from "../topic.view.component";

@Component({
  selector: 'topic-filter',
  templateUrl: './topic.filter.component.html',
})
export class TopicFilterComponent {

  constructor(private topicViewComponent: TopicViewComponent) { }

  onStatusChange(status) {
    this.topicViewComponent.getTopics(status);
  }
}
