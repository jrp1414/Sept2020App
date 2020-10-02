import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {
  AppComponent, StringInterpolationComponent,
  PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent,
  ProductsComponent,ProductThumbnailComponent, ShortenPipe, FilterPipe, 
  BasicHighlightDirective, BetterHighlightDirective,UnlessDirective, LoggerService, 
  ProductService,DashboardComponent,HeaderComponent,FooterComponent
} from "./application.index";
import { Route, RouterModule, Routes } from '@angular/router';

// const routes:Route[] = [];
const routes:Routes = [
 {path:"home", component:DashboardComponent}, //localhost:4200/home - DashbpardComponent's template
 {path:"products",component:ProductsComponent}, //localhost:4200/products - ProductsComponent
 {path:"",redirectTo:"home",pathMatch:'full'}, //     /
 {path:"**",redirectTo:"home"}
];

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
    FooterComponent
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
