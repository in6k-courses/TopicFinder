/**
 * Created by yevheniis on 12/12/16.
 */
import {Component} from '@angular/core';
import {TopicViewComponent} from "../view/topic.view.component";

@Component({
  selector: 'topic-filter',
  templateUrl: './topic.filter.component.html',
  styleUrls: ['./topic.filter.component.css']
})
export class TopicFilterComponent {

  constructor(private topicViewComponent: TopicViewComponent) { }

  onStatusFilterChange(status: string) {
    this.topicViewComponent.statusFilterChanged(status);
  }

  onCategoryFilterChange(category: string) {
    this.topicViewComponent.categoryFilterChanged(category);
  }
}
