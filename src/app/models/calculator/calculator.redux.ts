import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface IRCalculator {
  storedValue: number;
  NumberA?: number;
  NumberB?: number;
  sign?: String;
  Result?: number;
  flag: boolean;
}

export class InputAction {
  public static type = '[Calculator] Input';
  constructor(public input: String) {}
}

export class ResultAction {
  public static type = '[Calculator] Result';
  constructor() {}
}

export class ClearAction {
  public static type = '[Calculator] Clear';
  constructor() {}
}

@State<IRCalculator>({
  name: 'calculatorState',
  defaults: {
    storedValue: null,
    NumberA: null,
    NumberB: null,
    sign: null,
    Result: null,
    flag: false,
  },
})
@Injectable()
export class CalculatorState {
  constructor() {}

  @Selector()
  static getResult(state: IRCalculator) {
    return state.Result;
  }

  @Action(InputAction)
  add(state: StateContext<IRCalculator>, action: InputAction) {
    const actualState = state.getState();
    console.log('click input' + action.input);
    if (
      action.input != '/' &&
      action.input != '*' &&
      action.input != '-' &&
      action.input != '+' &&
      action.input != 'C' &&
      action.input != '='
    ) {
      if (!actualState.flag) {
        if (actualState.NumberA != null)
          state.patchState({
            NumberA: Number(String(actualState.NumberA) + action.input),
          });
        else state.patchState({ NumberA: Number(action.input) });
      } else {
        if (actualState.NumberB != null)
          state.patchState({
            NumberB: Number(String(actualState.NumberB) + action.input),
          });
        else state.patchState({ NumberB: Number(action.input) });
      }
    } else {
      state.patchState({ sign: action.input });
      state.patchState({ flag: true });
    }
  }

  @Action(ResultAction)
  addResult(state: StateContext<IRCalculator>, action: ResultAction) {
    const actualState = state.getState();
    if (actualState.NumberA != null && actualState.NumberB != null) {
      switch (actualState.sign) {
        case '/':
          state.patchState({
            Result: actualState.NumberA / actualState.NumberB,
          });
          break;
        case '*':
          state.patchState({
            Result: actualState.NumberA * actualState.NumberB,
          });
          break;
        case '+':
          state.patchState({
            Result: actualState.NumberA + actualState.NumberB,
          });
          break;
        case '-':
          state.patchState({
            Result: actualState.NumberA - actualState.NumberB,
          });
          break;
      }
    }
  }

  @Action(ClearAction)
  clear(state: StateContext<IRCalculator>, action: ClearAction) {
    console.log('click clear');
    state.setState({
      storedValue: null,
      NumberA: null,
      NumberB: null,
      sign: null,
      Result: null,
      flag: false,
    });
  }
}
