import { Text, View, StyleSheet } from "react-native";
import { Button } from "./Button";
type ButtonGridProps = {};

export function ButtonGrid() {
  const handlePress = () => console.log("press");
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button value="AC" type="secondary" onPress={handlePress} />
        <Button value="+/-" type="secondary" onPress={handlePress} />
        <Button value="%" type="secondary" onPress={handlePress} />
        <Button value="/" type="operator" onPress={handlePress} />
      </View>
      <View style={styles.row}>
        <Button value="7" type="number" onPress={handlePress} />
        <Button value="8" type="number" onPress={handlePress} />
        <Button value="9" type="number" onPress={handlePress} />
        <Button value="x" type="operator" onPress={handlePress} />
      </View>
      <View style={styles.row}>
        <Button value="4" type="number" onPress={handlePress} />
        <Button value="5" type="number" onPress={handlePress} />
        <Button value="6" type="number" onPress={handlePress} />
        <Button value="-" type="operator" onPress={handlePress} />
      </View>
      <View style={styles.row}>
        <Button value="3" type="number" onPress={handlePress} />
        <Button value="2" type="number" onPress={handlePress} />
        <Button value="1" type="number" onPress={handlePress} />
        <Button value="+" type="operator" onPress={handlePress} />
      </View>
      <View style={styles.row}>
        <Button value="0" type="number" onPress={handlePress} />
        <Button value="." type="number" onPress={handlePress} />
        <Button value="=" type="operator" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "50%",
    gap: 12,
  },
  row: {
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 1,
    gap: 12,
  },
});
