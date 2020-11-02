import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from "./app.component";
import {
  StringInterpolationComponent,
  PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent,
  ProductsComponent,ProductThumbnailComponent, DashboardComponent,HeaderComponent,
  FooterComponent, StudentsComponent,ProductDetailsComponent,StudentDetailsComponent,
  StudentEditComponent, SignUpComponent,TempProductsComponent
} from "./component.index";
import {BasicHighlightDirective, BetterHighlightDirective,UnlessDirective,
  MaxMinDirective, CompareDirective} from "./directive.index";
import {StudentsGuardService, LoggerService} from "./service.index";
import {ShortenPipe, FilterPipe} from "./pipe.index";    
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { StudentListResolver } from './students/Services/student-list.resolver';
import { StudentDetailsResolver } from './students/Services/student-details.resolver';

// const routes:Route[] = [];
const routes:Routes = [
 {path:"home", component:DashboardComponent}, //localhost:4200/home - DashbpardComponent's template
 {path:"products",component:ProductsComponent}, //localhost:4200/products - ProductsComponent
 {path:"productDetails/:id",component:ProductDetailsComponent}, 
 {path:"students",component:StudentsComponent,resolve:{studentList:StudentListResolver}, children:[
  {path:"new",component:StudentAddComponent}, 
  {path:":id",component:StudentDetailsComponent,resolve:{student:StudentDetailsResolver}, canActivate:[StudentsGuardService]},
   {path:":id/edit",component:StudentEditComponent}
 ]},
 {path:'signup',component:SignUpComponent},
 {path:"",redirectTo:"home",pathMatch:'full'}, //     /
 //{path:"**",redirectTo:"home"}
];

// Route Parameters - productDetails/5/Ram - id=5, name=Ram
// Query Parameters - /products?id=1&age=18&name=ram
// Fragment - products#test

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    StudentsComponent,
    ProductDetailsComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    TempProductsComponent,
    SignUpComponent,
    MaxMinDirective,
    CompareDirective,
    StudentAddComponent
  ],
  imports: [
    BrowserModule, //CommonModule
    MatNativeDateModule,
    MaterialModule,
    BrowserAnimationsModule,    
    FormsModule, // is for TDF
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
