import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm : FormGroup;
  firstName:FormControl= new FormControl();
  lastName:FormControl= new FormControl();
  emailId:FormControl= new FormControl();
  mobileNo:FormControl= new FormControl();
  addLine1:FormControl= new FormControl();
  addLine2:FormControl= new FormControl();
  addLine3:FormControl= new FormControl();
  city:FormControl= new FormControl();
  state:FormControl= new FormControl();
  address: FormGroup;
  hobbies:FormArray = new FormArray([
    new FormControl()
  ]);
  


  constructor() { }

  ngOnInit(): void {
    this.studentEditForm = new FormGroup({
      firstName: this.firstName,
      lastName:this.lastName,
      emailId:this.emailId,
      mobileNo:this.mobileNo,
      address:new FormGroup({
        addLine1: this.addLine1,
        addLine2: this.addLine2,
        addLine3: this.addLine3,
        city:this.city,
        state:this.state
      }),
      hobbies: this.hobbies 
    });
  }

  OnSubmit(){
    console.log(this.studentEditForm);
    console.log(this.studentEditForm.value);
  }

  AddHobby(){
    this.hobbies.push(new FormControl());
  }

}
