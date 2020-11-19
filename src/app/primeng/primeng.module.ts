import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChipsModule} from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChipsModule,
    ButtonModule,
    DropdownModule,
    SplitButtonModule
  ],
  exports:[
    ChipsModule,
    ButtonModule,
    DropdownModule,
    SplitButtonModule
  ]
})
export class PrimengModule { }
