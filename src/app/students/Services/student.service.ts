import { Injectable } from '@angular/core';
import { Student, studentList } from './students.data';

@Injectable({
  providedIn:"root"
})
export class StudentService {
  private students:Student[]= studentList; 
  constructor() { }

  GetStudentsList():Student[]{
    return this.students;
  }

  GetStudentsDetails(id:number):Student{
    return this.students.find((std)=>std.StudentId == id);
  }

  UpdateStudentDetails(student:Student){
    // let stds = [...students];
    let tempStudents = studentList.filter((std)=>std.StudentId !=student.StudentId);
    tempStudents.push(student);
    this.students = tempStudents;
  }
}


