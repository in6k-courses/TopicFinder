/**
 * Created by yevheniis on 12/12/16.
 */
import {Component} from '@angular/core';
import {TopicViewComponent} from "../topic.view.component";

@Component({
  selector: 'topic-filter',
  templateUrl: './topic.filter.component.html',
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
