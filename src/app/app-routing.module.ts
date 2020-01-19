import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskAddComponent } from './task-add/task-add.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'add', component: TaskAddComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
