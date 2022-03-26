import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
count=0;
nom:any=0;
  constructor() { this.count=7;console.log("i am constructor")}
incre(){
  this.count=this.count+1;
}
decre(){
  this.count=this.count-1;
}

giveNegativeCount(no: any){
 let num=no*(-1);
  console.log(num);
  return num;
}
  ngOnInit(): void {
    this.count=6;
    console.log("onint");
this.nom=this.giveNegativeCount(6);
console.log(this.fruits)
console.log(this.studObj)

  }
fruits=["Mango","orange","chikoo","banana"];
// name
// div
// agek
studObj={name:"Shubham",age:20,div:this.count}
students=[
  {name:"Shubham",age:20,div:this.count},
  {name:"Vaish",age:20,div:this.count},
  {name:"Sejal",age:20,div:this.count},
  {name:"Swalpe",age:20,div:this.count},

];
clubs=[
  {club_name:"Androus",cat:"IT"},
  {club_name:"ios",cat:"IT"},
  {club_name:"entre",cat:"account"},
  {club_name:"adcas",cat:"IT"},
  {club_name:"Androus",cat:"IT"},
  {club_name:"Androus",cat:"IT"}
]
}
