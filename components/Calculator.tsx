import { View, StyleSheet } from "react-native";
import { Display } from "./Display";
import { ButtonGrid } from "./ButtonGrid";
import { AlterTypes, OperatorTypes } from "@/types";
import { useCalculatorStore } from "@/store/useCalculatorStore";

export default function Calculator() {
  const {
    displayValue,
    prevValue,
    numberPress,
    operatorPress,
    alterPress,
    clearPress,
    resultPress,
  } = useCalculatorStore();

  const handleNumberPress = (value: string) => {
    numberPress(value);
  };

  const handleOperatorPress = (op: OperatorTypes) => {
    operatorPress(op);
  };

  const handleEnterPress = () => {
    resultPress();
  };

  const handleClearPress = () => {
    clearPress();
  };

  const handleAlterPress = (alt: AlterTypes) => {
    alterPress(alt);
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <ButtonGrid
        onNumberPress={handleNumberPress}
        onOperatorPress={handleOperatorPress}
        onAlterPress={handleAlterPress}
        onEnterPress={handleEnterPress}
        onClearPress={handleClearPress}
        prevValue={prevValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#0c0d0f",
    marginBottom: 60,
    gap: 12,
  },
});
