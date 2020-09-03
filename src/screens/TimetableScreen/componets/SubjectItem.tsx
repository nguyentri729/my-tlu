import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
export interface Subject {
  subjectName: string;
  endHour: {
    name: string;
    indexNumber: Int16Array;
    endString: string;
  };
  startHour: {
    name: string;
    indexNumber: Int16Array;
    startString: string;
  };
  room: {
    code: string;
    name: string;
  };
}
export interface Props {
  subject: Subject;
  firstItem: Boolean
}
const SubjectItem: React.FC<Props> = ({ subject, firstItem }) => {

  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      marginTop: firstItem ? 30 : 5,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      padding: 10,

      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      flexDirection: "column",
    
    },
    top: {
      borderBottomColor: "#bdc3c7",
      borderBottomWidth: 1,
      paddingBottom: 10
    },
    botton: {
    
    },
    lesson: {
      fontSize: 14,
      color: "#7f8c8d"
    },
    time: {
      fontSize: 15,
    },
    subjectName: {
      fontSize: 18,
      marginTop: 5,
      marginBottom: 10,
    },
    room: {
      fontSize: 20,
      
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
          <View>
            <Text style={styles.time}>
              {subject.startHour.startString} - {subject.endHour.endString}
            </Text>
            <Text style={styles.lesson}>
            {subject.startHour.name} - {subject.endHour.name}{" "}
            </Text>
          </View>
          <Text style={styles.room}>{subject.room.code}</Text>
         
        </View>
       
      </View>
      <View style={styles.botton}>
        <Text style={styles.subjectName}>{subject.subjectName}</Text>
      </View>
    </View>
  );
  
};
export default SubjectItem;
