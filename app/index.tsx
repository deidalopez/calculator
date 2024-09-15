import { Text, View, StyleSheet } from "react-native";
import { Display } from "@/components/Display";
import { ButtonGrid } from "@/components/ButtonGrid";
import { useState } from "react";

export default function Index() {
  const [displayValue, setDisplayValue] = useState("0");

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <ButtonGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    // backgroundColor: "#0c0d0f",
  },
});
