import { OperatorTypes, AlterTypes } from "@/types";

type GridStateType = {
  currValue: string;
  prevValue: string;
  operator: OperatorTypes | null;
  result: string;
  displayValue: string;
};

// Define the Actions
export enum ActionTypes {
  NUMBER_PRESS = "NUMBER_PRESS",
  OPERATOR_PRESS = "OPERATOR_PRESS",
  CLEAR_PRESS = "CLEAR_PRESS",
  RESULT_PRESS = "RESULT_PRESS",
  ALTER_PRESS = "ALTER_PRESS",
}

// Define the types for each Action
type NumberPressType = {
  type: ActionTypes.NUMBER_PRESS;
  payload: string;
};
type OperatorPressType = {
  type: ActionTypes.OPERATOR_PRESS;
  payload: OperatorTypes;
};
type ClearPressType = {
  type: ActionTypes.CLEAR_PRESS;
};
type ResultPressType = {
  type: ActionTypes.RESULT_PRESS;
  // payload: string;
};

type AlterPressType = {
  type: ActionTypes.ALTER_PRESS;
  payload: AlterTypes;
};

export type GridAction =
  | NumberPressType
  | OperatorPressType
  | ClearPressType
  | ResultPressType
  | AlterPressType;

export function calculateReducer(state: GridStateType, action: GridAction) {
}
