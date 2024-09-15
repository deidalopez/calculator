import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";

type ButtonProps = {
  value: string;
  type: "number" | "operator" | "secondary";
  onPress: () => void;
};

export function Button({ value, type, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ThemedText>{value}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 50,
    flex: 1,
  },
});
