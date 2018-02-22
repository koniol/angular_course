import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TaksService } from '../services/taks.sevice';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList = [];

  constructor(private taskService: TaksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.taskList = tasks;
    }
    );
  }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  doneTask(task: Task) {
    this.taskService.doneTask(task);
  }

}
