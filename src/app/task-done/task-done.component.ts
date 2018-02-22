import { Component, OnInit, Input } from '@angular/core';
import { TaksService } from '../services/taks.sevice';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  taskDone = [];

  constructor(private taskService: TaksService) {
    this.taskService.getTaskDoneObs().subscribe((tasks: Array<Task>) => {
      this.taskDone = tasks;
    });
  }

  ngOnInit() {
  }

}
