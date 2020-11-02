import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './Services/student.service';
import { Student } from './Services/students.data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  students:Student[]=[];
  constructor(private ss:StudentService,private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    //this.RefreshStudentList();

    this.route.data.subscribe((data)=>{
      this.students = data.studentList;
      this.ss.showSpinner = false;
    });

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
