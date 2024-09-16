import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { OperatorTypes, ButtonTypes } from "@/types";

type ButtonProps = {
  value: string | OperatorTypes;
  type: ButtonTypes;
  onPress: () => void;
};

export function Button({ value, type, onPress }: ButtonProps) {
  const getCustomStyle = () => {
    switch (type) {
      case "operator":
        return [{ ...styles.container, ...styles.orange }];
      case "secondary":
        return [{ ...styles.container, ...styles.lightGrey }];
      case "wide":
        return [{ ...styles.container, ...styles.wide }];
      default:
        return styles.container;
    }
  };

  if (value === "/") {
    return (
      <TouchableOpacity onPress={onPress} style={getCustomStyle()}>
        <ThemedText>
          <FontAwesome6 name="divide" size={24} color="white" />
        </ThemedText>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={getCustomStyle()}>
      <ThemedText style={type === "secondary" && styles.darkText}>
        {value}
      </ThemedText>
    </TouchableOpacity>
  );
}

export const MemoizedButton = React.memo(Button);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 70,
    maxHeight: 70,
    borderRadius: 70,
    backgroundColor: "#323436",
    justifyContent: "center",
    alignItems: "center",
  },
  orange: {
    backgroundColor: "orange",
  },
  lightGrey: {
    backgroundColor: "lightgrey",
  },
  wide: {
    maxWidth: "40%",
    flex: 2,
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  darkText: {
    color: "black",
  },
  selected: {
    backgroundColor: "white",
  },
  selectedText: {
    color: "black",
  },
});
