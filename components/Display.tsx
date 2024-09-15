import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

type DisplayProps = {
  value: string;
};

export function Display({ value }: DisplayProps) {
  return (
    <View style={styles.container}>
      <ThemedText>{value}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
    alignItems: "flex-end",
    width: "90%",
  },
});
