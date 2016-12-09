/**
 * Created by yevheniis on 12/9/16.
 */
import { Component } from '@angular/core';
import {TopicService} from "../../service/topic.service";
import {Topic} from "../../model/topic.model";
@Component({
    selector: 'topic-view',
    templateUrl: './topic.view.component.html',
    styleUrls: ['./topic.view.component.css'],
    providers: [TopicService]
})
export class TopicViewComponent {

    topics: Topic[];

    constructor(private topicService: TopicService) { }

    ngOnInit(): void {
        this.topicService.getTopics().then(topics => this.topics = topics);
    }
}