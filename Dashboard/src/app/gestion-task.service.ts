import { Injectable } from '@angular/core';
import { Task } from './task/model/task';

@Injectable({
  providedIn: 'root'
})
export class GestionTaskService {

  constructor() { }

  public lstToDo: Task[] = [];
  public lstProgress: Task[] = [];
  public lstDone: Task[] = [];

  newTask(libelleTask: string)
  {
    let newTask: Task = new Task(libelleTask, 0);
    this.lstToDo.push(newTask);
  }

  moveStateApres(task: Task, indexTask: number)
  {
    switch(task.idState)
    {
      case 0:
        this.lstToDo.splice(indexTask, 1);
        this.lstProgress.push(task);
      break;
      case 1:
        this.lstProgress.splice(indexTask, 1);
        this.lstDone.push(task);
      break;
      default:
      break;      
    }
  }

  moveStateAvant(task: Task, indexTask: number)
  {
    switch(task.idState)
    {
      case 1:
        this.lstProgress.splice(indexTask, 1);
        this.lstToDo.push(task);
      break;
      case 2:
        this.lstDone.splice(indexTask, 1);
        this.lstProgress.push(task);
      break;
      default:
      break;      
    }
  }

  deleteTask(idState: number, indexTask: number)
  {
    switch(idState)
    {
      case 0:
        this.lstToDo.splice(indexTask, 1);
      break;
      case 1:
        this.lstProgress.splice(indexTask, 1);
      break;
      case 2:
        this.lstDone.splice(indexTask, 1);
      break;
      default:
      break;      
    }
  }
}
