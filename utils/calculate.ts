import { ResultCalcType } from "@/types";

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

export { calculate };
