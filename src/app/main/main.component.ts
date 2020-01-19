import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { TasksService } from '../shared/services/tasks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output() deletetask = new EventEmitter<number>();
  tasks: Task[] = [];
  text_search: boolean;
  search_content = "";
  filter_status = "";
  router: any;
  constructor(private tasksService: TasksService) {}

  async ngOnInit(): Promise<void> {
    try {
      let res = await this.tasksService.getTasks();
      for (var prop in res) {
        let data = [];
        for (var key in res[prop]) {
          data.push(res[prop][key]);
        }
        console.log(data);
        this.tasks.push(new Task(data[0], data[1], data[2], data[3]));
      }
    } catch (err) {
      console.error(err);
    }
  }

  async doDelete(inTask) {
    this.tasks.splice(this.tasks.indexOf(inTask), 1);
    try {
      await this.tasksService.deleteTasks(inTask);
      this.deletetask.emit(inTask);
    } catch (err) {
      console.error(err);
    }
  }

}
