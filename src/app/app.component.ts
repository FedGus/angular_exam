import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from './shared/models/task.model';
import { TasksService } from './shared/services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'gusev1819';
  tasks: Task[] = [];
  text_search: boolean;
  search_text = "";
  complete: boolean = false;

  constructor(private tasksService: TasksService) {

  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
    
  }

  onAddTask(task: Task) {
    let newId = this.tasks[this.tasks.length - 1].id + 1;
    task.id = newId;
    this.tasks.push(task);
  }

  onEditTask(task: Task) {
    let newId = this.tasks[this.tasks.length - 1].id + 1;
    task.id = newId;
    this.tasks.push(task);
  }

  onDeleteTask(inTask) {
    this.tasks.splice(this.tasks.indexOf(inTask), 1);
  }

  async doGet() {
    try {
      let res = await this.tasksService.getTasks();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }
}
