import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task } from '../model/task';

@Injectable()
export class TaksService {

  private taskList = Array<Task>();
  private taskDone = new Array<Task>();

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.taskList = [
      {name: 'Nauczyć się Angulara', addate: new Date()},
      {name: 'Zjeść obiad', addate: new Date()},
      {name: 'Pouczyć się angielskiego', addate: new Date()},
      {name: 'Pobawić się z dziećmi', addate: new Date()},
      {name: 'Śiąść znowu do Angulara', addate: new Date()},
    ];

    this.taskListObs.next(this.taskList);
    this.taskDoneObs.next(this.taskDone);

  }


  addTask(task: Task) {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }

  deleteTask(task: Task) {
    this.taskList = this.taskList.filter(t => {
      return t !== task;
    }
    );
    this.taskListObs.next(this.taskList);
  }

  doneTask(task: Task) {
    this.taskDone.push(task);
    this.deleteTask(task);
    this.taskDoneObs.next(this.taskDone);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTaskDoneObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }
}
