import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/application.index';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: [
    // `
    // input.ng-invalid.ng-touched {
    //   border-color:darkred;
    //   border-width: 5px;
    // }
    // `
  ]
})
export class StudentEditComponent implements OnInit {

  studentEditForm: FormGroup;
  studentId:number;
  constructor(private fb: FormBuilder,
              private route:ActivatedRoute,
              private ss:StudentService,
              private router:Router) { }

  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      FirstName: this.fb.control("", [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      LastName: this.fb.control("", Validators.required),
      EmailId: this.fb.control("", [Validators.required, Validators.email]),
      MobileNo: this.fb.control(""),
      NotificationType: this.fb.control("email"),
      Address: this.fb.group({
        AddLine1: this.fb.control(""),
        AddLine2: this.fb.control(""),
        AddLine3: this.fb.control(null),
        City: this.fb.control(""),
        State: this.fb.control("")
      })
    });
    this.studentEditForm.get("NotificationType").valueChanges.subscribe((value) => {
      this.setNotification(value);
    });
    this.route.params.subscribe((parms)=>{
      this.studentId = +parms["id"];
      let student = this.ss.GetStudentsDetails(this.studentId);
      this.studentEditForm.patchValue(student);
    });
  }

  OnSubmit() {
    this.ss.UpdateStudentDetails({...this.studentEditForm.value,StudentId:this.studentId});
    this.router.navigate(["students"]);
  }

  setNotification(notificationType:string){
    let mobileNoControl = this.studentEditForm.get("MobileNo");
    if (notificationType=="mobile") {
      mobileNoControl.setValidators(Validators.required);
    }else{
      mobileNoControl.clearValidators();
    }
    mobileNoControl.updateValueAndValidity();
  }

}
