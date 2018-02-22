import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddTaksComponent } from './add-taks/add-taks.component';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDoneComponent } from './task-done/task-done.component';
import { TaksService } from './services/taks.sevice';


@NgModule({
  declarations: [
    AppComponent,
    AddTaksComponent,
    TaskListComponent,
    TaskDoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TaksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
