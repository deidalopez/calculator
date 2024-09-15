import { View, StyleSheet, SafeAreaView } from "react-native";
import { MemoizedDisplay as Display } from "@/components/Display";
import { ButtonGrid } from "@/components/ButtonGrid";
import { useState } from "react";

export default function Index() {
  const [displayValue, setDisplayValue] = useState("0");

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Display value={displayValue} />
        <ButtonGrid setDisplay={setDisplayValue} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#0c0d0f" },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#0c0d0f",
    marginBottom: 60,
    gap: 12,
  },
});
