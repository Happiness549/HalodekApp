import { Image, Text, StyleSheet, View } from "react-native";
import {Button} from "./Button"


const chats = [
  {
    name: "Faza Dzikkrulloh",
    time: "14:30",
    message: "Typing..",
    image: require("../../../assets/images/images.jpg"),
  },
  {
    name: "Hatypo Studio",
    time: "14:30",
    message: "Feza can you help to do with new project",
    image: require("../../../assets/images/picture.jpg"),
  },
  {
    name: "Zhoferan A",
    time: "14:00",
    message: "I think we should upgrade the social media",
    image: require("../../../assets/images/pictures.jpg"),
  },
  {
    name: "Vito Aryvy",
    time: "13:30",
    message: "Okay adhit, I'll tell faza about it",
    image: require("../../../assets/images/image.jpg"),
  },
  {
    name: "Raul",
    time: "Yesterday",
    message: "Thanks Raul ",
    image: require("../../../assets/images/image-4.jpg"),
  },
  {
    name: "Farhan Bagas",
    time: "29/08/22",
    message: "Great work Farhan I'll tell faza about logo",
    image: require("../../../assets/images/images-1.jpg"),
  },
  {
    name: "Abdull",
    time: "28/08/22",
    message: "Perfecto I will check it later",
    image: require("../../../assets/images/images-2.jpg"),
  },
  {
    name: "Ibe hatypo",
    time: "14:30",
    message: "Nicely done bro",
    image: require("../../../assets/images/image-5.jpg"),
  },
];

export const Chats = () => {

    return(
        <View style={styles.container}>

            {chats.map((item, index) =>(
            <View key={index}>
              
                <Text style={styles.chats}>{item.name}</Text>
                <Text style={styles.chatsTime}>{item.time}</Text>
                <Text style={styles.chats}>{item.message}</Text>
               
                <Image source={item.image} style={styles.chatsImage} />
                <View style={styles.line}></View>
            </View>   
              ))}  
            
            <Text style={styles.chatsIcon}>✓✓</Text>
            <Text style={styles.TextIcon}>✓✓</Text>
            <Text style={styles.chatsIcons}>✓✓</Text>
            <Text style={styles.TextIcons}>✓✓</Text>

            <Button />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,

  },
  line: {
    width: "75%",
    marginLeft: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 8,
  },
  chats: {
    marginLeft: 80,
    padding: 4,
  },
  chatsTime: {
    position: 'absolute',
    right: 20,
    top: 0,
  },
  chatsImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    left: 20,
    top: 0,
  }, 
  chatsIcon: {
    position: 'absolute',
    right: 16,
    marginTop: 320,
    color: '#F26A1B',
  },
  chatsIcons: {
    position: 'absolute',
    right: 16,
    marginTop: 390,
    color: '#F26A1B',
  },
  TextIcon: {
    position: 'absolute',
    right: 16,
    marginTop: 460,
    color: '#F26A1B',
  },
  TextIcons: {
    position: 'absolute',
    right: 16,
    color: '#F26A1B',
    marginTop: 530,
  },
})