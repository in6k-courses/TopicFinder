/**
 * Created by yevheniis on 12/14/16.
 */
import { Component } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/topic.category.model";

@Component({
  selector: 'topic-add',
  templateUrl: './topic.add.component.html',
  providers: [CategoryService]
})
export class TopicAddComponent {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  updateCategories() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories,
      error => console.error('Error')
    )
  }

  ngOnInit(): void {
    this.updateCategories();
  }

}
