import { ResultCalcType } from "@/types";

const calculate = ({ first, second, action }: ResultCalcType): string => {
  let res: number;
  switch (action) {
    case "+":
      res = +first + +second;
      console.log("res  " + res);
      break;
    case "-":
      res = +first - +second;
      break;
    case "x":
      res = +first * +second;
      break;
    case "/":
      // handle if trying to divide by 0
      if (second === "0") {
        return "Err";
      }
      res = +first / +second;
      break;
    default:
      res = 0;
      break;
  }

  return res.toString();
};

export { calculate };
