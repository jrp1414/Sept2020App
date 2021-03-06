import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeValidator } from 'src/app/Shared/range.validation';
import { StudentService } from '../Services/student.service';

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
  studentId: number;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private ss: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
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
    // this.studentEditForm.get("NotificationType").valueChanges.subscribe((value) => {
    //   this.setNotification(value);
    // });
    this.route.params.subscribe((parms) => {
      this.studentId = +parms["id"];
      this.ss.GetStudentsDetails(this.studentId).subscribe((resp) => {
        this.studentEditForm.patchValue(resp);
      });
    });

    // this.studentEditForm.get("TermsAndConditions").valueChanges.subscribe((value) => {
    //   console.log(this.studentEditForm.get("TermsAndConditions"));
    // });
  }

  OnSubmit() {
    //console.log(this.studentEditForm.value);
    this.ss.UpdateStudentDetails({ ...this.studentEditForm.value, StudentId: this.studentId }).subscribe((resp) => {
      this.ss.Notify.emit(true);
      this.router.navigate(["students"]);
    });

  }

  setNotification(notificationType: string) {
    let mobileNoControl = this.studentEditForm.get("MobileNo");
    if (notificationType == "mobile") {
      mobileNoControl.setValidators(Validators.required);
    } else {
      mobileNoControl.clearValidators();
    }
    mobileNoControl.updateValueAndValidity();
  }

  Cancel(){
    this.router.navigate(["students"]);
  }

  cities: any[] = [
    { name: "Pune", value: 1 },
    { name: "Bhubaneswar", value: 2 },
    { name: "Bengaluru", value: 3 },
    { name: "Chennai", value: 4 },
    { name: "Mumbai", value: 5 }
  ];

}


function ValidateAge(control: AbstractControl): null | { [key: string]: boolean } {
  if (control.value >= 10 && control.value <= 25) {
    return null;
  }
  return { range: true };
}
