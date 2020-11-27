import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator-template/calculator-template.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [CalculatorComponent, ButtonComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }