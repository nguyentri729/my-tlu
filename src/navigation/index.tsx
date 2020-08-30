import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screens/HomeScreen'
import TimetableScreen from '../screens/TimetableScreen'

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
