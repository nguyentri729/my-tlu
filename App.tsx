import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage, Button } from "react-native";
import agent from "./src/agent";
import HomeScreen from "./src/screens/HomeScreen";
import Navigation from "./src/navigation/index";
export default function App() {
  return <Navigation />;
}
