import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-taks',
  templateUrl: './add-taks.component.html',
  styleUrls: ['./add-taks.component.css']
})
export class AddTaksComponent implements OnInit {

  newTask: string;

  constructor() { }

  @Output()
  eventTask = new EventEmitter<string>();

  add() {
    this.eventTask.emit(this.newTask);
    this.newTask = '';
  }


  ngOnInit() {

  }

}
