import { Injectable } from '@angular/core'; 
import { BaseApiService } from './base-api.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({ 
providedIn: 'root' 
} )
export class TasksService extends BaseApiService{ 

header: HttpHeaders; 
url = 'tasks'; 

constructor(httpClient: HttpClient) { 
super(httpClient); 
this.header = new HttpHeaders(); 
this.header.set('Content-type', 'application/json'); 
} 

getTasks() { 
return this.get(this.url, this.header).toPromise(); 
} 

postTasks(data) { 
return this.post(this.url, data, this.header).toPromise(); 
} 

putTasks(id: number, data) { 
return this.put(`${this.url}/${id}`, data, this.header).toPromise(); 
} 

deleteTasks(id) { 
return this.delete(`${this.url}/${id}`, this.header).toPromise(); 
} 



}