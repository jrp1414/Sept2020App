import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styles: []
})
export class StudentAddComponent implements OnInit {
  studentAddForm:FormGroup;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private ss: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.studentAddForm = this.fb.group({
      FirstName: this.fb.control("", [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      LastName: this.fb.control("", Validators.required),
      EmailId: this.fb.control("", [Validators.required, Validators.email]),
      MobileNo: this.fb.control(""),
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(null),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    });
  }

  OnSubmit() {
    //console.log(this.studentEditForm.value);
    this.ss.AddStudentDetails({ ...this.studentAddForm.value, StudentId: 0 }).subscribe((resp) => {
      this.ss.Notify.emit(true);
      this.router.navigate(["students"]);
    });

  }

  cities: any[] = [
    { name: "Pune", value: 1 },
    { name: "Bhubaneswar", value: 2 },
    { name: "Bengaluru", value: 3 },
    { name: "Chennai", value: 4 },
    { name: "Mumbai", value: 5 }
  ];

}
