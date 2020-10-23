import { Component, OnInit } from '@angular/core';
import { StudentService } from './Services/student.service';
import { Student } from './Services/students.data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  students:Student[]=[];
  constructor(private ss:StudentService) {
    
   }

  ngOnInit(): void {
    this.ss.GetStudentsList().subscribe((resp)=>{
      this.students = resp;
    });
  }

}
