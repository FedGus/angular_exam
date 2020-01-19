import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TasksService } from '../shared/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
@Output() addtask = new EventEmitter<Task>();

  taskForm: FormGroup;
  disabledForms = false;
  constructor(private router: Router, private tasksService: TasksService) { }

  ngOnInit() {
    this.taskForm = new FormGroup ({
      description: new FormControl({ value: '', disabled: this.disabledForms},
      [Validators.minLength(3)]),
      datecomplete: new FormControl({ value: '', disabled: this.disabledForms},
      [Validators.required]),
    })

    
  }

  onAddNote(description: string, status: boolean, datecomplete: string) {
    let note = new Task(description, status, datecomplete);
    this.addtask.emit(note);
  }

  async doPost(inputDescription, inputDateComplete) {
    let inputStatus = false;
    let obj = {description: inputDescription.value, status: inputStatus, datecomplete: inputDateComplete.value};
    try {
      await this.tasksService.postTasks(obj);
      let note = new Task(inputDescription.value, inputStatus, inputDateComplete.value);
      this.addtask.emit(note);
      this.router.navigate([`/`]); 
    } catch (err) {
      console.error(err);
    }
    
  }


}
