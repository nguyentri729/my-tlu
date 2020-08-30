import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import styles from "./styles";
import agent from "../../agent";
export interface Props {
  navigation?: any;
  router?: any;
}
const Hello: React.FC<Props> = ({navigation}) => {
  return (
    <ImageBackground
      source={require("../../../assets/login-background.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
           // console.log(navigation);
           //navigation.navigate('Details')}
           navigation.navigate('Timetable')
          }}
        >
          <View style={styles.items}>
            <Image
              source={require("../../../assets/timetables.png")}
              style={styles.icon}
            />
            <Text style={styles.title}>Lịch học</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.items}>
          <Image
            source={require("../../../assets/search.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Điểm thi</Text>
        </View>
        <View style={styles.items}>
          <Image
            source={require("../../../assets/book.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Thư viện</Text>
        </View>
        <View style={styles.items}>
          <Image
            source={require("../../../assets/calender.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Lịch thi</Text>
        </View>
        <View style={styles.items}>
          <Image
            source={require("../../../assets/bank.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Học phi</Text>
        </View>
        <View style={styles.items}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Thông tin</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
export default Hello;