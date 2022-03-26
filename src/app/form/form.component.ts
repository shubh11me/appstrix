import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MyserviceService } from '../myservice.service';
import { Stud } from '../stud';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  lihayla="text";
  studentData:Stud;
  imgSrc;
  admin=false;
  constructor(private sejal: MyserviceService) { }
  myForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required)
  })
 
  submit() {
    if (this.myForm.valid) {
this.studentData=this.myForm.value;
      // console.log(this.studentData)
      this.sejal.registerStudent(this.studentData).subscribe(
        (res)=>{
          console.log(res)
        },
        (err)=>{
          console.log(err)
        }
      );

    }
  }
  ngOnInit(): void {
    if (this.admin==true) {
      this.imgSrc="https://1000logos.net/wp-content/uploads/2016/11/google-logo.jpg";
  
    }else{
      this.imgSrc="https://thumbs.dreamstime.com/b/creative-gb-logo-icon-design-simple-clean-crisp-vector-format-170604030.jpg";
    }
  }

}
