import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';

  taskList = Array<string>();
  taskDone = new Array<string>();


  addTask(task) {
    this.taskList.push(task);
  }

  deleteTask(task) {
    this.taskList = this.taskList.filter(t => {
      return t !== task;
    }
    );
  }

  doneTask(task) {
    this.taskDone.push(task);
    this.deleteTask(task);
  }


  getColor() {
    return this.taskList.length > 5 ? 'red' : 'purple';
  }


}
