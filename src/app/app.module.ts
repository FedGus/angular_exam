import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { HeaderComponent } from './header/header.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';
/*import { NoteAddComponent } from './note-add/note-add.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { FilterPipe } from './shared/pipes/filter.pipe';*/

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    HeaderComponent,
    TaskAddComponent,
    ContactComponent,
    MainComponent,
    FilterPipe,
    SortPipe,
    /*NoteAddComponent,
    NoteEditComponent,
    FilterPipe*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
