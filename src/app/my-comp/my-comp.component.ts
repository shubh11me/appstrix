import { Component, OnInit } from '@angular/core';
import { MyserviceService } from "../myservice.service";
@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  count = this.serv.count;
  nom: any = 0;
  constructor(private serv: MyserviceService) { console.log("i am constructor") }
  incre() {
    this.serv.incre();
  }
  decre() {
    this.serv.decre();
  }

  giveNegativeCount(no: any) {
    let num = no * (-1);
    console.log(num);
    return num;
  }
  sum=this.serv.sum(6,8);
  ngOnInit(): void {
    console.log("onint");
    this.nom = this.giveNegativeCount(6);
    console.log(this.fruits)
    console.log(this.studObj)
    console.log(this.serv.name)
  }
  fruits = ["Mango", "orange", "chikoo", "banana"];
  // name
  // div
  // agek
  studObj = { name: "Shubham", age: 20, div: this.count }
  students = [
    { name: "Shubham", age: 20, div: this.count },
    { name: "Vaish", age: 20, div: this.count },
    { name: "Sejal", age: 20, div: this.count },
    { name: "Swalpe", age: 20, div: this.count },

  ];
  clubs = [
    { club_name: "Androus", cat: "IT" },
    { club_name: "ios", cat: "IT" },
    { club_name: "entre", cat: "account" },
    { club_name: "adcas", cat: "IT" },
    { club_name: "Androus", cat: "IT" },
    { club_name: "Androus", cat: "IT" }
  ]
}
