import { Component, Input } from '@angular/core';
import { GestionTaskService } from '../gestion-task.service';
import { Task } from './model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(private gestionTaskService: GestionTaskService)
  {}

  @Input() task: Task;
  @Input() index: number;
  delete : boolean;

  moveState(state: string)
  {
    if(state == "avant")
    {
      this.gestionTaskService.moveStateAvant(this.task, this.index);

      this.task.setState(this.task.idState - 1);
    }
    else
    {
      this.gestionTaskService.moveStateApres(this.task, this.index);

      this.task.setState(this.task.idState + 1);
    }
    
  }

  deleteTask(idState: number, indexTask: number)
  {
    if(confirm('Voulez-vous supprimer la tache ?'))
    {
      this.gestionTaskService.deleteTask(idState, indexTask);
    }
  }

}
