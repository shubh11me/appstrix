import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  showText=true;
  badal(){
    console.log("clicked")
    this.showText=!this.showText;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
