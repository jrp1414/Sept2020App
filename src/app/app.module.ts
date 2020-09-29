import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {
  AppComponent, StringInterpolationComponent,
  PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent,
  ProductsComponent,ProductThumbnailComponent, ShortenPipe, FilterPipe, 
  BasicHighlightDirective, BetterHighlightDirective,UnlessDirective
} from "./application.index";

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
    UnlessDirective
  ],
  imports: [
    BrowserModule, //CommonModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
