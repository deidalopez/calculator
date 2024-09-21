type OperatorTypes = "/" | "x" | "-" | "+" | "=";

type ResultCalcType = {
  first: string;
  second: string;
  action: OperatorTypes;
};

type ButtonTypes = "number" | "operator" | "secondary" | "wide";

type AlterTypes = "+/-" | "%";

export { OperatorTypes, ResultCalcType, ButtonTypes, AlterTypes };
