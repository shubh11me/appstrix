import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  name = "sejal";

  count = 5;
  constructor(private http:HttpClient) { }

  incre() {
    this.count = this.count + 1;
    console.log(this.count)
  }
  decre() {
    this.count = this.count - 1;
    console.log(this.count)

  }
  sum(a, b) {
    return a + b;
  }

  wordCounter(word) {
    return word.length;
  }
url="http://localhost/PracticeProjects/tut/crud/API/";
registerStudent(data){
 return this.http.post(this.url+"create.php",data)
}

getStudents(){
  return this.http.get(this.url+"read.php");
}

}
