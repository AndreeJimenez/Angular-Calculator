import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CalculatorState } from 'src/app/models/calculator/calculator.redux';

@Component({
  selector: 'app-calculator-template',
  templateUrl: './calculator-template.component.html',
  styleUrls: ['./calculator-template.component.scss']
})
export class CalculatorComponent {

  constructor() { }

  ngOnInit(): void {}

  keypad = [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'], 
    [1, 2, 3, '-'],
    ['C', 0, '+', '=']
  ]

  @Select(CalculatorState.getResult) result$: Observable<number>;

}
