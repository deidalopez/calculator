import { StyleSheet, SafeAreaView } from "react-native";
import Calculator from "@/components/Calculator";

export default function Index() {
  return (
    <SafeAreaView style={styles.flex}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#0c0d0f" },
});
