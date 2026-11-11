import { Text, StyleSheet, View } from "react-native";


const chats = [
  {
    name: "Faza Dzikkrulloh",
    time: "14:30",
    message: "Typing..",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Hatypo Studio",
    time: "14:30",
    message: "Feza can you help to do with new project",
    technologies: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Zhoferan A",
    time: "14:00",
    message: "I think we should upgrade the social media",
    technologies: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    name: "Vito Aryvy",
    time: "13:30",
    message: "Managing application state and data flow.",
    technologies: ["Redux Toolkit", "Zustand"],
  },
  {
    name: "Raul",
    time: "Yesterday",
    message: "Thanks Raul",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Farhan Bagas",
    time: "29/08/22",
    message: "Great work Farhan I'll tell faza about logo",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Abdull",
    time: "28/08/22",
    message: "Perfecto I will check it later",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Ibe hatypo",
    time: "14:30",
    message: "Nocely done bro",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
];

export const Chats = () => {

    return(
        <View style={styles.container}>

            {chats.map((item, index) =>(
            <View key={index}>
              
                <Text style={styles.chats}>{item.name}</Text>
                <Text style={styles.chats}>{item.time}</Text>
                <Text style={styles.chats}>{item.message}</Text>
                <View style={styles.line}></View>
            </View>   
              ))}  
            

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  line: {
    width: "50%",
    marginLeft: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 8,
  },
  chats: {
    marginLeft: 100,
  }
})