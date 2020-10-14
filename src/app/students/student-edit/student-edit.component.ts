import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styles: []
})
export class StudentEditComponent implements OnInit {

  studentEditForm : FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      firstName:this.fb.control(""),
      lastName:this.fb.control(""),
      emailId:this.fb.control(""),
      mobileNo:this.fb.control(""),
      address:this.fb.group({
        addLine1:this.fb.control(""),
        addLine2:this.fb.control(""),
        addLine3:this.fb.control(""),
        city:this.fb.control(""),
        state:this.fb.control("")
      }),
      hobbies:this.fb.array([
        this.fb.control("")
      ])
    }) 
  }

  OnSubmit(){
    console.log(this.studentEditForm);
    console.log(this.studentEditForm.value);
  }

  AddHobby(){
    (<FormArray>this.studentEditForm.get("hobbies")).push(this.fb.control(""));
  }

}
