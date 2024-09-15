import { Text, View, StyleSheet } from "react-native";
import { MemoizedButton as Button } from "./Button";
import { useEffect, useState } from "react";
import { OperatorTypes, ResultCalcType } from "@/types";
import { calculate } from "@/utils/calculate";
type AlterTypes = "+/-" | "%";
type ButtonGridProps = {
  setDisplay: (val: string) => void;
};

export function ButtonGrid({ setDisplay }: ButtonGridProps) {
  const [currValue, setCurrValue] = useState("0");
  const [prevValue, setPrevValue] = useState("0");
  const [operator, setOperator] = useState<OperatorTypes | null>(null);
  const [result, setResult] = useState("0");

  useEffect(() => {
    setDisplay(currValue);
  }, [currValue]);

  useEffect(() => {
    setDisplay(result);
  }, [result]);

  const handleNumberPress = (value: string) => {
    currValue === "0" ? setCurrValue(value) : setCurrValue(currValue + value);
  };

  const handleOperatorPress = (op: OperatorTypes) => {
    setOperator(op);
    setPrevValue(currValue);
    setCurrValue("0");
  };

  const handleEnter = ({ first, second, action }: ResultCalcType) => {
    let result = calculate({ first, second, action });
    setResult(result);

    // TODO we are clearing here, but we could also replace firstValue with result, and continue chaining operations
    reset();
    // setPrevValue(result);
    // setCurrValue("0");
  };

  const reset = () => {
    setCurrValue("0");
    setPrevValue("0");
    setOperator(null);
  };

  const handleClearPress = () => {
    reset();
    setResult("0");
  };

  const handleAlter = (alt: AlterTypes) => {
    switch (alt) {
      case "%":
        console.log("curr * 0.01");
        break;
      case "+/-":
        console.log("curr * -1");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button value="AC" type="secondary" onPress={handleClearPress} />
        <Button
          value="+/-"
          type="secondary"
          onPress={() => handleAlter("+/-")}
        />
        <Button value="%" type="secondary" onPress={() => handleAlter("%")} />
        <Button
          value="/"
          type="operator"
          onPress={() => handleOperatorPress("/")}
        />
      </View>
      <View style={styles.row}>
        <Button
          value="7"
          type="number"
          onPress={() => handleNumberPress("7")}
        />
        <Button
          value="8"
          type="number"
          onPress={() => handleNumberPress("8")}
        />
        <Button
          value="9"
          type="number"
          onPress={() => handleNumberPress("9")}
        />
        <Button
          value="x"
          type="operator"
          onPress={() => handleOperatorPress("x")}
        />
      </View>
      <View style={styles.row}>
        <Button
          value="4"
          type="number"
          onPress={() => handleNumberPress("4")}
        />
        <Button
          value="5"
          type="number"
          onPress={() => handleNumberPress("5")}
        />
        <Button
          value="6"
          type="number"
          onPress={() => handleNumberPress("6")}
        />
        <Button
          value="-"
          type="operator"
          onPress={() => handleOperatorPress("-")}
        />
      </View>
      <View style={styles.row}>
        <Button
          value="1"
          type="number"
          onPress={() => handleNumberPress("1")}
        />

        <Button
          value="2"
          type="number"
          onPress={() => handleNumberPress("2")}
        />
        <Button
          value="3"
          type="number"
          onPress={() => handleNumberPress("3")}
        />
        <Button
          value="+"
          type="operator"
          onPress={() => handleOperatorPress("+")}
        />
      </View>
      <View style={styles.row}>
        <Button value="0" type="wide" onPress={() => handleNumberPress("0")} />
        <Button
          value="."
          type="number"
          onPress={() => handleNumberPress(".")}
        />
        <Button
          value="="
          type="operator"
          onPress={() =>
            operator &&
            handleEnter({
              first: prevValue,
              second: currValue,
              action: operator,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "55%",
    gap: 12,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    flex: 1,
  },
});
