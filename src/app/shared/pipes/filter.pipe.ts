import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], search: string ) {
    if(!isNullOrUndefined(tasks) && search.trim() !== "") {
      let search_tasks = tasks.filter(
        task => task.description.toLowerCase().indexOf(search.toLowerCase()) != -1
      );
      return search_tasks;
    }
    return tasks;
  }

}
