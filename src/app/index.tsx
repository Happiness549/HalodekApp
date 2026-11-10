import { Text, View, StyleSheet } from "react-native";
import { Header } from "./components/Header";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    borderRadius: 10,
  },
});
