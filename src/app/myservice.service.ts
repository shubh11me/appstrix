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

registerStudent(studentData){
 return this.http.post("http://localhost/PracticeProjects/tut/crud/API/create.php",studentData);
}

getStudents(){
  return this.http.get("http://localhost/PracticeProjects/tut/crud/API/read.php");
}

}
