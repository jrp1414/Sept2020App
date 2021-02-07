import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import {
  StringInterpolationComponent,
  PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent,
  ProductsComponent, ProductThumbnailComponent, DashboardComponent, HeaderComponent,
  FooterComponent, ProductDetailsComponent,
   SignUpComponent, TempProductsComponent
} from "./component.index";
import {
  BasicHighlightDirective, BetterHighlightDirective, UnlessDirective,
  MaxMinDirective, CompareDirective
} from "./directive.index";

import { ShortenPipe, FilterPipe } from "./pipe.index";
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { StudentInterceptor } from './students/Services/student.interceptor';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/auth.reducer';
import { PrimengModule } from './primeng/primeng.module';
import { LoggerService } from './Services/logger.service';

// const routes:Route[] = [];
const routes: Routes = [
  { path: "home", component: DashboardComponent }, //localhost:4200/home - DashbpardComponent's template
  { path: "products", component: ProductsComponent }, //localhost:4200/products - ProductsComponent
  { path: "productDetails/:id", component: ProductDetailsComponent },
  {
    path: "students",
    loadChildren:()=> import("./students/students.module").then(m=>m.StudentsModule)
  },
  { path: 'signup', component: SignUpComponent },
  { path: "", redirectTo: "home", pathMatch: 'full' }, //     /
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
    ProductDetailsComponent,
    TempProductsComponent,
    SignUpComponent,
    MaxMinDirective,
    CompareDirective
  ],
  imports: [
    BrowserModule, //CommonModule
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialModule,
    PrimengModule,
    FormsModule, // is for TDF
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ 'auth': authReducer })
  ],
  providers: [
    LoggerService,
    { provide: HTTP_INTERCEPTORS, useClass: StudentInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
