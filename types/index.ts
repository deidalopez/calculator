type OperatorTypes = "/" | "x" | "-" | "+" | "=";

type ResultCalcType = {
  first: string;
  second: string;
  action: OperatorTypes;
};

type ButtonTypes = "number" | "operator" | "secondary" | "wide";

type AlterTypes = "+/-" | "%";

type GridStateType = {
  currValue: string;
  prevValue: string;
  operator: OperatorTypes | null;
  result: string;
  displayValue: string;
};

export {
  OperatorTypes,
  ResultCalcType,
  ButtonTypes,
  AlterTypes,
  GridStateType,
};
