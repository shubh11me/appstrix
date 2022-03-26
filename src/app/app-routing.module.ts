import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'my', component:MyCompComponent,children:[
    {path: 'new', component:NewcompComponent},
  ]},
  { path: 'new', component:NewcompComponent},
  { path: 'counter', component:CounterComponent},
  { path: 'form', component:FormComponent},
  { path: 'studs', component:StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
