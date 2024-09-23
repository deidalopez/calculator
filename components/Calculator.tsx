import { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import { Display } from "./Display";
import { ButtonGrid } from "./ButtonGrid";
import { ActionTypes, calculateReducer } from "@/store/reducer";
import { AlterTypes, GridStateType, OperatorTypes } from "@/types";

const initialState: GridStateType = {
  currValue: "0",
  prevValue: "0",
  operator: "=",
  result: "0",
  displayValue: "0",
};
export default function Calculator() {
  const [state, dispatch] = useReducer(calculateReducer, initialState);

  const handleNumberPress = (value: string) => {
    dispatch({ type: ActionTypes.NUMBER_PRESS, payload: value });
  };

  const handleOperatorPress = (op: OperatorTypes) => {
    dispatch({ type: ActionTypes.OPERATOR_PRESS, payload: op });
  };

  const handleEnterPress = () => {
    dispatch({ type: ActionTypes.RESULT_PRESS });
  };

  const handleClearPress = () => {
    dispatch({ type: ActionTypes.CLEAR_PRESS });
  };

  const handleAlterPress = (alt: AlterTypes) => {
    dispatch({ type: ActionTypes.ALTER_PRESS, payload: alt });
  };

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />
      <ButtonGrid
        onNumberPress={handleNumberPress}
        onOperatorPress={handleOperatorPress}
        onAlterPress={handleAlterPress}
        onEnterPress={handleEnterPress}
        onClearPress={handleClearPress}
        state={state}
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
