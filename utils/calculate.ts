import { AlterTypes, ResultCalcType } from "@/types";

const calculate = ({ first, second, action }: ResultCalcType): string => {
  let res: number;
  switch (action) {
    case "+":
      res = +first + +second;
      break;
    case "-":
      res = +first - +second;
      break;
    case "x":
      res = +first * +second;
      break;
    case "/":
      res = +first / +second;
      break;
    default:
      res = 0;
      break;
  }

  if (!isFinite(res)) {
    return "Err";
  }

  return res.toString();
};

const alterNumber = (alt: AlterTypes, value: string) => {
  let altered: number;
  switch (alt) {
    case "%":
      altered = +value * 0.01;
      break;
    case "+/-":
      altered = +value * -1;
      break;
  }
  return altered.toString();
};

export { calculate, alterNumber };
