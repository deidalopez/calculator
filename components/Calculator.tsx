import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Display } from "./Display";
import { ButtonGrid } from "./ButtonGrid";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <ButtonGrid setDisplay={setDisplayValue} />
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
