import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { InputAction, ResultAction, ClearAction } from 'src/app/models/calculator/calculator.redux';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor( private store: Store) { }

  @Input() data;

  ngOnInit(): void {
  }

  onClick() {
    if (this.data != 'C' && this.data != '=') {
      this.store.dispatch(new InputAction(this.data));
    } else if (this.data == '=') {
      this.store.dispatch(new ResultAction());
    } else {
      this.store.dispatch(new ClearAction());
    }
  }
}
