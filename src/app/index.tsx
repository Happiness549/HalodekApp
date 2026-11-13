import { Text, View, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import {Chats} from "./components/Chat"


export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      
      <Chats/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
  },
});
