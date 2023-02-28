import { Component } from '@angular/core';
import { GestionTaskService } from './gestion-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public gestionTaskService: GestionTaskService
  ) {}

  title = 'Dashboard';
  libelleTask: string;

  newTask()
  {
    if(this.libelleTask.length > 0)
    {
      this.gestionTaskService.newTask(this.libelleTask);
      this.libelleTask = "";
    }
  }  
}
