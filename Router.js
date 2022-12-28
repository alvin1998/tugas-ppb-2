import React, { Component }  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  SplashIndex  from './SplashScreen/SplashIndex.js';
import  Home  from './Home.js'

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashIndex} options={{ headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default Router;