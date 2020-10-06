import { Injectable } from '@angular/core';
import { Student, students } from './students.data';

@Injectable({
  providedIn:"root"
})
export class StudentService {
  private students:Student[]= students; 
  constructor() { }

  GetStudentsList():Student[]{
    return this.students;
  }

  GetStudentsDetails(id:number):Student{
    return this.students.find((std)=>std.StudentId == id);
  }
}


