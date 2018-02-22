import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaksService } from '../services/taks.sevice';
import { Task } from '../model/task';


@Component({
  selector: 'app-add-taks',
  templateUrl: './add-taks.component.html',
  styleUrls: ['./add-taks.component.css']
})
export class AddTaksComponent implements OnInit {

  name: string;

  constructor(private taskService: TaksService) {
  }

  add() {
    const task: Task = ({
      name: this.name,
      addate: new Date(),
    });

    this.taskService.addTask(task);
    this.name = '';
  }


  ngOnInit() {

  }

}
