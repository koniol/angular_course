import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  taskList = [];

  @Input()
  taskDone = [];

  @Output()
  eventDone = new EventEmitter<string>();

  @Output()
  eventDelete = new EventEmitter<string>();

  deleteTask(task: string) {
    this.eventDelete.emit(task);
  }

  doneTask(task: string) {
    this.eventDone.emit(task);
  }

}
