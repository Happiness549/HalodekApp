import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import TabBar from "./Buttons"



export const Header = () => {

    return(
        <View style={styles.container}>
       
        <Text style={styles.HeaderText}>HALODEK</Text>
        <View style={styles.Ionicons}>
           <Ionicons name="search" size={35} />
           <Ionicons name="ellipsis-vertical" size={35} />
        </View>

      <TabBar/>

       
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
    borderRadius: 10,
    margin: 10,
  },

  Ionicons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10, 
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'black',
  },
    HeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F26A1B',
    },
    TimeText: {
    fontSize: 20,
    fontWeight: 'bold', 
    },
    HeaderButtons: {
      backgroundColor: "#FFE8CC",
      marginTop: 35,
      padding: 15,
      display: "flex",
      flexDirection: 'row',
      justifyContent: "space-around"
    },
    ButtonText: {
      color: "#F26A1B"
    },
    ButtonHover: {
      backgroundColor: "#F26A1B",
      paddingVertical: 8,
      paddingHorizontal: 55,
      borderRadius: 8,
    },
    ButtonTextHover: {
      color: "white"
    },
   
   
});