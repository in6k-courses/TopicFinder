/**
 * Created by yevheniis on 12/14/16.
 */
import {Component, Input} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/topic.category.model";
import {Topic} from "../../model/topic.model";
import {TopicService} from "../../service/topic.service";
import {isUndefined} from "util";
import {Router} from "@angular/router";
import {TopicViewComponent} from "../view/topic.view.component";

@Component({
  selector: 'topic-add',
  templateUrl: './topic.add.component.html',
  providers: [
    CategoryService,
    TopicService
  ]
})
export class TopicAddComponent {

  topic: Topic = new Topic(null, 'asdasd', 'asdasd', true, 1);
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
              private topicService: TopicService,
              private router: Router
  ) { }

  updateCategories() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories,
      error => console.error('Error')
    )
  }

  addTopic() {
    this.topicService.addTopic(this.topic);
    this.router.navigate(['']);
  }

  clearForm() {
    this.topic.title = '';
    this.topic.description = '';
    this.topic.categoryId = this.categories[0].id;
  }

  ngOnInit(): void {
    this.updateCategories();
  }

}
