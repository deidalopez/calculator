import { View, StyleSheet } from "react-native";
import { MemoizedButton as Button } from "./Button";
import { OperatorTypes, AlterTypes, GridStateType } from "@/types";

type ButtonGridProps = {
  onNumberPress: (value: string) => void;
  onOperatorPress: (value: OperatorTypes) => void;
  onAlterPress: (value: AlterTypes) => void;
  onEnterPress: () => void;
  onClearPress: () => void;
  state: GridStateType;
};
export function ButtonGrid({
  onNumberPress,
  onOperatorPress,
  onAlterPress,
  onEnterPress,
  onClearPress,
  state,
}: ButtonGridProps) {
  // const { prevValue, currValue, operator, result } = state;
  const { prevValue } = state;

  const renderNumberButtons = (numbers: string[]) => {
    return numbers.map((number) => (
      <Button
        key={number}
        value={number}
        type="number"
        onPress={() => onNumberPress(number)}
      />
    ));
  };

  const renderOperatorButton = (op: OperatorTypes) => {
    return (
      <Button value={op} type="operator" onPress={() => onOperatorPress(op)} />
    );
  };

  // const DebugView = (
  //   <View>
  //     <Text style={{ color: "white" }}>
  //       {`${prevValue} ${operator} ${currValue} = ${result}`}
  //     </Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button
          value={prevValue !== "0" ? "C" : "AC"}
          type="secondary"
          onPress={onClearPress}
        />
        <Button
          value="+/-"
          type="secondary"
          onPress={() => onAlterPress("+/-")}
        />
        <Button value="%" type="secondary" onPress={() => onAlterPress("%")} />
        {renderOperatorButton("/")}
      </View>
      <View style={styles.row}>
        {renderNumberButtons(["7", "8", "9"])}
        {renderOperatorButton("x")}
      </View>
      <View style={styles.row}>
        {renderNumberButtons(["4", "5", "6"])}
        {renderOperatorButton("-")}
      </View>
      <View style={styles.row}>
        {renderNumberButtons(["1", "2", "3"])}
        {renderOperatorButton("+")}
      </View>
      <View style={styles.row}>
        <Button value="0" type="wide" onPress={() => onNumberPress("0")} />
        <Button value="." type="number" onPress={() => onNumberPress(".")} />
        <Button value="=" type="operator" onPress={onEnterPress} />
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
