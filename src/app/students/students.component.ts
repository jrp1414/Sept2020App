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
    this.RefreshStudentList();

    this.ss.Notify.subscribe((resp)=>{
      if (resp) {
        this.RefreshStudentList();
      }
    });
  }

  RefreshStudentList(){
    this.ss.GetStudentsList().subscribe((resp)=>{
      this.students = resp;
    });
  }

  DeleteStudent(studentId){
    this.ss.DeleteStudent(studentId).subscribe(()=>{
      this.RefreshStudentList();
    });
  }

}
