/**
 * Created by yevheniis on 12/12/16.
 */
import {Component} from '@angular/core';
import {TopicViewComponent} from "../topic.view.component";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/topic.category.model";

@Component({
  selector: 'topic-filter',
  templateUrl: './topic.filter.component.html',
  providers: [CategoryService]
})
export class TopicFilterComponent {

  categories: Category[] = [];

  selectedStatus: string = 'All';
  selectedCategory: string = 'All';

  constructor(private topicViewComponent: TopicViewComponent,
              private categoryService: CategoryService) { }

  onStatusChange(status) {
    this.topicViewComponent.getTopics(status);
  }

  applyFilters() {
    this.topicViewComponent.applyFilters(this.selectedStatus, this.selectedCategory);
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories,
      error => console.error('Error'),
      () => this.applyFilters()
    );
  }
}
