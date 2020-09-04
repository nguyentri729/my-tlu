import { StatusBar } from "expo-status-bar";
import React, { useEffect, useReducer, createContext } from "react";
import { StyleSheet, Text, View, AsyncStorage, Button } from "react-native";
import agent from "./src/agent";
import Login from "./src/screens/LoginScreen/index";
import HomeScreen from "./src/screens/HomeScreen";
import Navigation from "./src/navigation/index";

/* global store */
import AppContext, {appAction} from "./src/store/appContext";
import appReducer from "./src/store/appReducer";
 
export default function App() {
  const [state, dispatch] = useReducer(appReducer, {});
  const contextValue = appAction(dispatch)
  return (
    <AppContext.Provider value={contextValue}>
      <Login />
    </AppContext.Provider>
  );
}
