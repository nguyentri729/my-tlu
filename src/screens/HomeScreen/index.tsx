import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import styles from "./styles";
import agent from "../../agent";
import { AntDesign } from "@expo/vector-icons";
export interface Props {
  navigation?: any;
  router?: any;
}
import AppContext from "../../store/appContext";
export interface IUserInfo {
  displayName?: string;
  username?: string;
}
const Hello: React.FC<Props> = ({ navigation }) => {
  const appAction: any = React.useContext(AppContext);
  const [userInfo, setUserInfo] = React.useState<IUserInfo>({});
  useEffect(() => {
    agent
      .get("users/getCurrentUser")
      .then((res) => {
        const { displayName, username } = res.data;
        setUserInfo({ displayName, username });
      })
      .catch((err) => {
        appAction.signOut();
        Alert.alert(err.message);
      });
  }, []);
  return (
    <ImageBackground
      source={require("../../../assets/login-background.png")}
      style={styles.image}
    >
      <View style={styles.profile_box}>
        <Image
          style={styles.profile_image}
          source={{
            uri: `http://dkhsv.tlu.edu.vn:8092/education/public/users/photo/${userInfo?.username}`,
          }}
        />
        <View>
          <Text style={styles.profile_name}>{userInfo?.displayName}</Text>
          <Text style={styles.profile_code}>
            MSV:
            {userInfo?.username}
          </Text>

          <TouchableOpacity
            style={styles.btn_logout}
            onPress={() => appAction.signOut()}
          >
            <Text style={{ color: "white" }}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            // console.log(navigation);
            //navigation.navigate('Details')}
            navigation.navigate("Timetable");
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
          <TouchableOpacity
            onPress={() => {
              // console.log(navigation);
              //navigation.navigate('Details')}
              navigation.navigate("Setting");
            }}
          >
            <Image
              source={require("../../../assets/setting.png")}
              style={styles.icon}
            />
            <Text style={styles.title}>Cài đặt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Hello;
