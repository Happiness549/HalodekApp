import {Pressable} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
export const Button = () => {

    return(
        <Pressable style={styles.button}>
          <Ionicons name="add" size={25} color="white" />
        </Pressable>
    )

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F26A1B",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 80,
    right: 12,
  },
  })

