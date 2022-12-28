import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dasboard from './Dasboard';
import Resi from './Resi';
import Note from './Note';
import Ionicons from 'react-native-vector-icons/Ionicons';

  
  const Tab = createBottomTabNavigator();

const Home = () => {
    return (
          <Tab.Navigator   screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Dasboard') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Resi') {
                iconName = focused ? 'ios-logo-buffer' : 'ios-logo-buffer';
              }else if (route.name === 'Note') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="Dasboard" component={Dasboard}   />
            <Tab.Screen name="Resi" component={Resi}  />
            <Tab.Screen name="Note" component={Note} />
          </Tab.Navigator>
      );
};



export default Home;