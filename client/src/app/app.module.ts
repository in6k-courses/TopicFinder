import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";

import './rxjs-extensions';
import {RouterModule} from "@angular/router";
import {TopicViewComponent} from "./topic/view/topic.view.component";
import {HeaderMenuComponent} from "./header/menu/header.menu.component";
import {TopicTopMenuComponent} from "./topic/menu/topic.top.menu.component";
import {TopicFilterComponent} from "./topic/filter/topic.filter.component";
import {TopicAddComponent} from "./topic/add/topic.add.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicViewComponent,
    HeaderMenuComponent,
    TopicTopMenuComponent,
    TopicFilterComponent,
    TopicAddComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TopicViewComponent
      },
      {
        path: 'topic/add',
        component: TopicAddComponent
      }
    ])
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
