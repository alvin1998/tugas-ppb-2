import React, { Component }  from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Router  from './Router'


const Stack = createNativeStackNavigator();
function App () {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  ); 
}

export default App;