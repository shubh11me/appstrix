import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { StudentsComponent } from './students/students.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    NewcompComponent,
    CounterComponent,
    FormComponent,
    StudentsComponent
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
