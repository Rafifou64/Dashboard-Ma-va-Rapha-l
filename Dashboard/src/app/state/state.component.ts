import { Component, Input } from '@angular/core';
import { Task } from '../task/model/task';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {

  @Input() nomState: String;
  @Input() lstTask: Task[];

}
