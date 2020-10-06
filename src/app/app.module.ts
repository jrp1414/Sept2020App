import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {
  AppComponent, StringInterpolationComponent,
  PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent,
  ProductsComponent,ProductThumbnailComponent, ShortenPipe, FilterPipe, 
  BasicHighlightDirective, BetterHighlightDirective,UnlessDirective, LoggerService, 
  ProductService,DashboardComponent,HeaderComponent,FooterComponent,
  StudentsComponent,ProductDetailsComponent,StudentDetailsComponent,StudentEditComponent
} from "./application.index";
import { Route, RouterModule, Routes } from '@angular/router';
import { StudentsGuardService } from './students/Services/students-guard.service';
import { TempProductsComponent } from './temp-products/temp-products.component';


// const routes:Route[] = [];
const routes:Routes = [
 {path:"home", component:DashboardComponent}, //localhost:4200/home - DashbpardComponent's template
 {path:"products",component:ProductsComponent}, //localhost:4200/products - ProductsComponent
 {path:"productDetails/:id",component:ProductDetailsComponent}, 
 {path:"students",component:StudentsComponent, children:[
   {path:":id",component:StudentDetailsComponent, canActivate:[StudentsGuardService]},
   {path:":id/edit",component:StudentEditComponent}
 ]},
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
    TempProductsComponent
  ],
  imports: [
    BrowserModule, //CommonModule
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoggerService
    //ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
