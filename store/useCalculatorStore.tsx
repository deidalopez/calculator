import { create } from "zustand";
import { OperatorTypes, AlterTypes, GridStateType } from "@/types";
import { calculate, alterNumber } from "@/utils/calculate";

interface CalculatorState extends GridStateType {
  numberPress: (value: string) => void;
  operatorPress: (operator: OperatorTypes) => void;
  clearPress: () => void;
  resultPress: () => void;
  alterPress: (alterType: AlterTypes) => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  operator: null,
  currValue: "0",
  prevValue: "0",
  result: "0",
  displayValue: "0",

  numberPress: (value) =>
    set((state) => {
      if (value === "." && state.currValue.includes(".")) {
        return state;
      }
      const newValue =
        state.currValue === "0" && value !== "."
          ? value
          : state.currValue + value;
      return {
        displayValue: newValue,
        currValue: newValue,
      };
    }),

  operatorPress: (newOperator) =>
    set((state) => {
      if (state.prevValue !== "0" && state.operator) {
        const result = calculate({
          first: state.prevValue,
          second: state.currValue,
          action: state.operator,
        });
        return {
          prevValue: result,
          operator: newOperator,
          displayValue: result,
          currValue: "0",
        };
      }
      return {
        prevValue: state.currValue,
        operator: newOperator,
        currValue: "0",
      };
    }),

  clearPress: () =>
    set(() => ({
      operator: null,
      currValue: "0",
      prevValue: "0",
      result: "0",
      displayValue: "0",
    })),

  alterPress: (alterType) =>
    set((state) => {
      const newValue = alterNumber(
        alterType,
        state.currValue !== "0" ? state.currValue : state.prevValue
      );
      return {
        displayValue: newValue,
        currValue: newValue,
      };
    }),

  resultPress: () =>
    set((state) => {
      if (state.operator) {
        const result = calculate({
          first: state.prevValue,
          second: state.currValue,
          action: state.operator,
        });
        return {
          result,
          displayValue: result,
          operator: null,
          currValue: "0",
          prevValue: "0",
        };
      }
      return {
        displayValue: "ERROR",
      };
    }),
}));
