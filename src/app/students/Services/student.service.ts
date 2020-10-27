import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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
    return this.http.put(this.baseUrl+"UpdateStudent",student);
  }

  AddStudentDetails(student:Student):Observable<any>{
    return this.http.post(this.baseUrl+"AddStudent",student);
  }

  DeleteStudent(studentId:number):Observable<any>{
    return this.http.delete(this.baseUrl+"DeleteStudent/"+studentId);
  }

  Notify:EventEmitter<boolean> = new EventEmitter<boolean>();
}


