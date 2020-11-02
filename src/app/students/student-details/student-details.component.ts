import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService,Student } from '../../service.index';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: []
})
export class StudentDetailsComponent implements OnInit {
  student: Student;
  constructor(private ss: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe((parms) => {
    //   let id = +parms["id"];
    //   this.ss.GetStudentsDetails(id).subscribe((resp)=>{
    //     this.student = resp;
    //   });
    // });

    this.route.data.subscribe((data)=>{
      this.student = data.student;
    });
  }

}
