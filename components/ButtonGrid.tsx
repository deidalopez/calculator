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
  const [firstValue, setFirstValue] = useState("0");
  const [secondValue, setSecondValue] = useState("0");
  const [operator, setOperator] = useState<OperatorTypes | null>(null);
  const [result, setResult] = useState("0");

  useEffect(() => {
    if (secondValue !== "0") {
      setDisplay(secondValue);
    } else {
      setDisplay(firstValue);
    }
  }, [firstValue, secondValue]);

  useEffect(() => {
    setDisplay(result);
  }, [result]);

  const handleNumberPress = (value: string) => {
    // FIXME not sure if basing it off a present operator will work well...
    if (!operator) {
      firstValue === "0"
        ? setFirstValue(value)
        : setFirstValue(firstValue + value);
    } else {
      secondValue === "0"
        ? setSecondValue(value)
        : setSecondValue(secondValue + value);
    }
  };

  const handleOperatorPress = (op: OperatorTypes) => {
    setOperator(op);
  };

  const handleEnter = ({ first, second, action }: ResultCalcType) => {
    let result = calculate({ first, second, action });
    setResult(result);

    // TODO we are clearing here, but we could also replace firstValue with result, and continue chaining operations
    reset();
  };

  const reset = () => {
    setFirstValue("0");
    setSecondValue("0");
    setOperator(null);
  };

  const handleClearPress = () => {
    reset();
    setResult("0");
  };

  const ViewOperation = () => (
    <View>
      <Text> {`${firstValue} ${operator} ${secondValue}`}</Text>
    </View>
  );

  const handleAlter = (alt: AlterTypes) => {
    console.log("alt " + alt);
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
      <ViewOperation />
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
          value="3"
          type="number"
          onPress={() => handleNumberPress("3")}
        />
        <Button
          value="2"
          type="number"
          onPress={() => handleNumberPress("2")}
        />
        <Button
          value="1"
          type="number"
          onPress={() => handleNumberPress("1")}
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
              first: firstValue,
              second: secondValue,
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
    borderColor: "red",
    borderWidth: 1,
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
