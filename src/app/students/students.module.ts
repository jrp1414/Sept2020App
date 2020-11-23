import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudentAddComponent } from './student-add/student-add.component';
import { RouterModule, Routes } from "@angular/router";
import { StudentListResolver } from './Services/student-list.resolver';
import { StudentDetailsResolver } from './Services/student-details.resolver';
import { StudentEditDeactivateGuard } from './Services/student-edit-guard.service';
import { StudentsGuardService } from './Services/students-guard.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentsComponent } from './students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';


const routes: Routes = [
    {
        path: "", component: StudentsComponent, resolve: { studentList: StudentListResolver }, children: [
            { path: "new", component: StudentAddComponent },
            { path: ":id", component: StudentDetailsComponent, resolve: { student: StudentDetailsResolver }, canActivate: [StudentsGuardService] },
            { path: ":id/edit", component: StudentEditComponent, canDeactivate: [StudentEditDeactivateGuard] }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        MatNativeDateModule,
        MaterialModule,
        PrimengModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        StudentAddComponent,
        StudentDetailsComponent,
        StudentEditComponent,
        StudentsComponent,
    ]
})
export class StudentsModule {

}