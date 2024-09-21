import { OperatorTypes, AlterTypes, GridStateType } from "@/types";
import { calculate, alterNumber } from "@/utils/calculate";

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
  switch (action.type) {
    case ActionTypes.NUMBER_PRESS:
      if (action.payload === "." && state.currValue.includes(".")) {
        return state;
      }
      return {
        ...state,
        displayValue:
          state.currValue === "0"
            ? action.payload
            : state.currValue + action.payload,
        currValue:
          state.currValue === "0"
            ? action.payload === "."
              ? state.currValue + action.payload
              : action.payload
            : state.currValue + action.payload,
      };
    case ActionTypes.OPERATOR_PRESS:
      if (state.prevValue !== "0" && state.operator) {
        let result = calculate({
          first: state.prevValue,
          second: state.currValue,
          action: state.operator,
        });
        return {
          ...state,
          prevValue: result,
          operator: action.payload,
          currValue: "0",
        };
      }
      return {
        ...state,
        prevValue: state.currValue,
        operator: action.payload,
        currValue: "0",
      };
    case ActionTypes.CLEAR_PRESS:
      return {
        operator: null,
        currValue: "0",
        prevValue: "0",
        result: "0",
        displayValue: "0",
      };
    case ActionTypes.ALTER_PRESS:
      return {
        ...state,
        displayValue: alterNumber(action.payload, state.currValue),
        currValue:
          state.currValue === "0"
            ? alterNumber(action.payload, state.prevValue)
            : alterNumber(action.payload, state.currValue),
      };
    case ActionTypes.RESULT_PRESS:
      // TODO if actionPress ENTER, then set prevValue as result, and clear currValue... maybe new value, display value?
      if (state.operator) {
        return {
          ...state,
          result: calculate({
            first: state.prevValue,
            second: state.currValue,
            action: state.operator,
          }),
          displayValue: calculate({
            first: state.prevValue,
            second: state.currValue,
            action: state.operator,
          }),
          // Then reset the values
          // TODO do we have to reset operator?
          operator: null,
          currValue: "0",
          prevValue: "0",
        };
      }
      return {
        ...state,
        displayValue: "ERROR",
      };
    default:
      return state;
  }
}
