import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TasksService } from '../shared/services/tasks.service'
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  editForm: FormGroup;
  @Input() inTask: Task;
  @Output() deletetask = new EventEmitter<number>();
  @Output() edittask = new EventEmitter<Task>();

  isEdit: boolean;
  tasks: Task[] = [];
  addEdit: string = "Edit";
  today: number = Date.now();
  formatdate: string;
  complete: boolean = false;

  constructor(private router: Router, private tasksServices: TasksService) { }

  ngOnInit() {
    this.editForm = new FormGroup ({
      description: new FormControl({ value: '', disabled: true},
      [Validators.minLength(3)]),
      status: new FormControl({ value: '', disabled: true},
      [Validators.required]),
      datecomplete: new FormControl({ value: '', disabled: true},
      [Validators.required]),
    })
  let pipe = new DatePipe('en-US');
      this.formatdate = pipe.transform(this.today, "yyyy-MM-dd");

      console.log(this.formatdate);
  }

  onDeleteTask(inTask) {
    this.tasks.splice(this.tasks.indexOf(inTask), 1);
    this.deletetask.emit(inTask);
  }

  onEditTask(description: string, status: boolean, datecomplete: string) {
    let task = new Task(description, status, datecomplete);
    this.edittask.emit(task);
  }

  showEdit() {
    this.isEdit = !this.isEdit;
    if(this.addEdit == "Edit") {
      this.addEdit = "Save";
    } else {
      this.addEdit = "Edit";
    }
  }

  async doPut(id: number, inDescription: string, inStatus: boolean, inDateCreate: string) {
    try {
          this.isEdit = !this.isEdit;
        if (this.addEdit == "Редактировать") {
          this.addEdit = "Сохранить";
          
        }
        else {this.addEdit = "Редактировать";
        let task = new Task (inDescription, inStatus, inDateCreate);
        await this.tasksServices.putTasks(id, task);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async doDelete(inTask) {
    this.tasks.splice(this.tasks.indexOf(inTask), 1);
    try {
      await this.tasksServices.deleteTasks(inTask);
      this.deletetask.emit(inTask);
    } catch (err) {
      console.error(err);
    }
  }

}

