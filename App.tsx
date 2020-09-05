import { StatusBar } from "expo-status-bar";
import React, { useEffect, useReducer, useState,  } from "react";
import { StyleSheet, Text, View, AsyncStorage, Button } from "react-native";
import agent from "./src/agent";
import Login from "./src/screens/LoginScreen/index";
import HomeScreen from "./src/screens/HomeScreen";
import Navigation from "./src/navigation/index";

/* global store */
import AppContext, {appAction} from "./src/store/appContext";
import appReducer from "./src/store/appReducer";
 
export default function App() {
  const [state, dispatch] = useReducer(appReducer, {isSign: false});
  const contextValue = appAction(dispatch)
  const [isShowSplash, setIsShowSplash] = useState(true)
  


  useEffect(() => {
    AsyncStorage.getItem('username', (err, result) => {
      if (result) {
        dispatch({ type: "SIGN_IN" })
      }else{
        dispatch({ type: "SIGN_OUT" })
      }
      setIsShowSplash(false)
    })
  }, [])

  if (isShowSplash) {
    return (<Text>Splash here</Text>)
  }


  return (
    <AppContext.Provider value={contextValue}>
      {state?.isSign ? <Navigation /> : <Login />}
    </AppContext.Provider>
  );
}
