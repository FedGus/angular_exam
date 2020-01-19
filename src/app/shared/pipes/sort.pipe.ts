import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';
import { isNullOrUndefined } from 'util';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  today: number = Date.now();
  formatdate: string;
  transform(tasks: Task[], search: string) {
    if(!isNullOrUndefined(tasks) && (search || '').trim() !== "") {
      if (search == "1") {
      let search_tasks = tasks.filter(
        task => task.status === true
      );
      return search_tasks;
      } else if (search == "2") {
        let search_tasks = tasks.filter(
          task => task.status === false
        );
        return search_tasks;
      } else if (search == "3") {
        let pipe = new DatePipe('en-US');
        this.formatdate = pipe.transform(this.today, "yyyy-MM-dd");
        let search_tasks = tasks.filter(
        task => task.datecomplete < this.formatdate && task.status === false
      );
      return search_tasks;
      } else {
        return tasks;
      }
     } 
    return tasks;
  }

}
