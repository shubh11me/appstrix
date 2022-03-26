import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private serv:MyserviceService) { }
allStudents=[];
  ngOnInit(): void {
    this.serv.getStudents().subscribe(
      (res:any)=>{
      this.allStudents=res.data;

      console.log(this.allStudents)
      },
      (err)=>{console.log(err)}
    )
  }

}
