import { Ionicons } from '@expo/vector-icons';
import {Pressable} from "react-native"
import { StyleSheet, Text, View } from 'react-native';



export const Header = () => {

    return(
        <View style={styles.container}>
       
        <Text style={styles.HeaderText}>HALODEK</Text>
        <View style={styles.Ionicons}>
           <Ionicons name="search" size={35} />
           <Ionicons name="ellipsis-vertical" size={35} />
        </View>

        <View style={styles.HeaderButtons}>
          <Pressable style={({pressed}) => pressed && styles.ButtonHover}>
            {({pressed}) => (

            
          <Text style={[styles.ButtonText, pressed && styles.ButtonTextHover]}>Chat</Text>
            )}
          </Pressable>
          <Pressable style={({pressed}) => pressed && styles.ButtonHover}>
            {({pressed}) => (

            
          <Text style={[styles.ButtonText, pressed && styles.ButtonTextHover]}>Status</Text>
            )}
          </Pressable>
          <Pressable style={({pressed}) => pressed && styles.ButtonHover}>
            {({pressed}) => (

            
          <Text style={[styles.ButtonText, pressed && styles.ButtonTextHover]}>Calls</Text>
            )}
          </Pressable>
        </View>
       
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
    }

});