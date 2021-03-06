import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
  AsyncStorage
} from "react-native";
import styles from "./styles/index";
import agent from "../../agent"
import AppContext from "../../store/appContext"
export default function LoginScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const appAction:any  = React.useContext(AppContext);
  
  const login = async () => {
    await AsyncStorage.setItem('username', username)
    await AsyncStorage.setItem('password', password)
    agent('/users/getCurrentUser').then(res => {
      appAction.signIn()
    }).catch(err => {
      Alert.alert(err.message)
    })
  }

  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/login-background.png")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          style={styles.main}
          behavior={Platform.OS == "ios" ? "position" : "padding"}
        >
          <Image
            source={require("../../../assets/logo-tlu.png")}
            resizeMode="contain"
            style={styles.logo}
          />

          <TextInput
            style={styles.input}
            placeholder="Mã sinh viên"
            placeholderTextColor="#636e72"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            placeholderTextColor="#636e72"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              login()
            }}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText} >Đăng nhập</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
