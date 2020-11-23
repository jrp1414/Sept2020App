import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudentDetailsComponent, StudentEditComponent, StudentsComponent } from '../component.index';
import { StudentAddComponent } from './student-add/student-add.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        StudentAddComponent,
        StudentDetailsComponent,
        StudentEditComponent,
        StudentsComponent,
    ]
})
export class StudentsModule {

}