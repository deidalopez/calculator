import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import React from "react";

type DisplayProps = {
  value: string;
};

export function Display({ value }: DisplayProps) {
  return (
    <View style={styles.container}>
      <ThemedText
        style={value.length > 7 ? styles.smallerText : styles.text}
        numberOfLines={1}
      >
        {value}
      </ThemedText>
    </View>
  );
}

export const MemoizedDisplay = React.memo(Display);

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: "90%",
    minHeight: 80,
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 70,
    lineHeight: 85,
    fontWeight: 300,
  },
  smallerText: {
    fontSize: 40,
    lineHeight: 56,
    fontWeight: 300,
  },
});
