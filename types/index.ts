type OperatorTypes = "/" | "x" | "-" | "+" | "=";

type ResultCalcType = {
  first: string;
  second: string;
  action: OperatorTypes;
};

export { OperatorTypes, ResultCalcType };
