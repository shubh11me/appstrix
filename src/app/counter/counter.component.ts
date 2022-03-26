import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  sum=this.swal.sum(7,9);

  constructor(private swal: MyserviceService) { }
  count=0;
  decre(){
    this.count--
  }
  incre(){
    this.count++
  }
  ngOnInit(): void {
  }

}
