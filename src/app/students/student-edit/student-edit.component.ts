import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  hobbies: FormArray;
  addresses: FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.hobbies = this.fb.array([
      this.fb.control("")
    ]);
    this.addresses = this.fb.array([
      this.fb.group({
        addLine1: this.fb.control(""),
        addLine2: this.fb.control(""),
        addLine3: this.fb.control(null),
        city: this.fb.control(""),
        state: this.fb.control("")
      })
    ])
    this.studentEditForm = this.fb.group({
      firstName: this.fb.control("", [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      lastName: this.fb.control("", Validators.required),
      emailId: this.fb.control("", [Validators.required, Validators.email]),
      mobileNo: this.fb.control(""),
      notificationType: this.fb.control("email"),
      termsAndConditions: this.fb.control(""),
      addresses: this.addresses,
      hobbies: this.hobbies
    });
    this.studentEditForm.get("notificationType").valueChanges.subscribe((value) => {
      this.setNotification(value);
    });
  }

  OnSubmit() {
    console.log(this.studentEditForm);
    console.log(this.studentEditForm.value);
  }

  AddHobby() {
    (<FormArray>this.studentEditForm.get("hobbies")).push(this.fb.control(""));
  }
  AddAddress() {
    (<FormArray>this.studentEditForm.get("addresses")).push(this.fb.group({
      addLine1: this.fb.control(""),
      addLine2: this.fb.control(""),
      addLine3: this.fb.control(null),
      city: this.fb.control(""),
      state: this.fb.control("")
    }));
  }

  setNotification(notificationType:string){
    let mobileNoControl = this.studentEditForm.get("mobileNo");
    if (notificationType=="mobile") {
      mobileNoControl.setValidators(Validators.required);
    }else{
      mobileNoControl.clearValidators();
    }
    mobileNoControl.updateValueAndValidity();
  }

}
