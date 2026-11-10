import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {

    return(
        <View style={styles.container}
        >
        <Text style={styles.TimeText}>9:41</Text>
        <View style={styles.Ionicons}>
            <Ionicons name="battery-full" size={20}  />
            <Ionicons name="wifi" size={20}  />
            <Ionicons name="cellular" size={20}  />
        </View>
         <Text style={styles.HeaderText}>HALODEK</Text>
        <View style={styles.Ionicons}>
           <Ionicons name="search" size={35} />
           <Ionicons name="ellipsis-vertical" size={35} />
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
    justifyContent: 'flex-end',
    marginBottom: 10,
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
    }
});