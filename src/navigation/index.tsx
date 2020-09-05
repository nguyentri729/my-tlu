import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screens/HomeScreen'
import TimetableScreen from '../screens/TimetableScreen'
import SettingScreen from '../screens/SettingScreen/SettingScreen'

const Stack = createStackNavigator();

export default function RootStack () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={HomeScreen} options={{ 
          headerShown: false,
         
        }}/>
        <Stack.Screen name={"Timetable"} component={TimetableScreen} options={{ 
          title: "Lịch học"
        }} />

      <Stack.Screen name={"Setting"} component={SettingScreen} options={{ 
          title: "Cài đặt"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
