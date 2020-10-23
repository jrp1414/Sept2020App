import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, studentList } from './students.data';

@Injectable({
  providedIn:"root"
})
export class StudentService {
  private baseUrl:string="https://localhost:44319/";
  constructor(private http:HttpClient) { }

  GetStudentsList():Observable<any>{
    return this.http.get(this.baseUrl+"GetStudents");
  }

  GetStudentsDetails(id:number):Observable<any>{
    return this.http.get(this.baseUrl+"GetStudent/"+id);
  }

  UpdateStudentDetails(student:Student):Observable<any>{
    // let stds = [...students];
    // let tempStudents = studentList.filter((std)=>std.StudentId !=student.StudentId);
    // tempStudents.push(student);
    // this.students = tempStudents;
    return this.http.put(this.baseUrl+"UpdateStudent",student);
  }
}


