import { create } from "zustand";
import { OperatorTypes, AlterTypes, GridStateType } from "@/types";
import { calculate, alterNumber } from "@/utils/calculate";

// Define the state interface
interface CalculatorState extends GridStateType {
  numberPress: (value: string) => void;
  operatorPress: (operator: OperatorTypes) => void;
  alterPress: (alterType: AlterTypes) => void;
  clearPress: () => void;
  resultPress: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  
}));
