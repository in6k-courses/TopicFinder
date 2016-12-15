/**
 * Created by yevheniis on 12/9/16.
 */
import {Component} from '@angular/core';
import {TopicService} from "../../service/topic.service";
import {Topic} from "../../model/topic.model";
import {Category} from "../../model/topic.category.model";
import {CategoryService} from "../../service/category.service";

@Component({
    selector: 'topic-view',
    templateUrl: './topic.view.component.html',
    styleUrls: ['./topic.view.component.css'],
    providers: [
      TopicService,
      CategoryService
    ]
})
export class TopicViewComponent {

  topics: Topic[] = [];
  categories: Category[] = [];

  selectedStatusFilter: string = 'all';
  selectedCategoryFilters: Category;

  constructor(private topicService: TopicService,
              private categoryService: CategoryService
  ) { }

  applyFilters() {
    this.applyStatusFilter();
    this.applyCategoryFilter()
  }

  statusFilterChanged(statusFilter: string) {
    this.selectedStatusFilter = statusFilter;
    this.updateTopics();
  }

  categoryFilterChanged(categoryFilter: string) {
    console.log('categoryFilterCategory');
    this.selectedCategoryFilters = undefined;
    for (let category of this.categories) {
      if (category.title == categoryFilter) {
        this.selectedCategoryFilters = category;
        break;
      }
    }
    console.log(this.selectedCategoryFilters);
    this.updateTopics();
  }

  applyStatusFilter(): void {
    console.log('applyStatusFilter');
    let filteredTopics = [];
    console.log(this.selectedStatusFilter);
    switch (this.selectedStatusFilter)
    {
      case 'active' :
        console.log('active');
        for (let topic of this.topics) {
          console.log(topic.status);
          if (topic.status == true) {
            filteredTopics.push(topic);
          }
        }
        break;
      case 'archive' :
        console.log('archive');
        for (let topic of this.topics) {
          console.log(topic.status);
          if (topic.status == false) {
            filteredTopics.push(topic);
          }
        }
        break;
      default:
        filteredTopics = this.topics;
    }
    console.log(filteredTopics);
    console.log(this.topics);
    this.topics = filteredTopics;
  }

  applyCategoryFilter(): void {
    console.log('applyCategoryFilter');
    let filteredTopics = [];
    if (this.selectedCategoryFilters != undefined) {
      for (let topic of this.topics) {
        if (topic.categoryId == this.selectedCategoryFilters.id) {
          filteredTopics.push(topic);
        }
      }
      this.topics = filteredTopics;
    }
    console.log(filteredTopics);
    console.log(this.topics);
  }

  getCategoryById(id: number): string {
    let categoryName: string;
    for (let category of this.categories) {
      if (category.id == id) {
        categoryName = category.title;
        break;
      }
    }
    return categoryName;
  }

  updateTopics() {
    this.topicService.getTopics().subscribe(
      topics => this.topics = topics,
      error => console.error('Error'),
      () => this.applyFilters()
    )
  }

  updateCategories() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories,
      error => console.error('Error'),
      () => this.applyFilters()
    )
  }

  ngOnInit(): void {
    this.updateCategories();
    this.updateTopics();
  }
}
