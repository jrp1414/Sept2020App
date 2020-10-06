import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../Services/student.service';
import { Student } from '../Services/students.data';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent implements OnInit {
  student: Student;
  constructor(private ss: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((parms) => {
      let id = +parms["id"];
      this.student = this.ss.GetStudentsDetails(id);
    });
  }

}
