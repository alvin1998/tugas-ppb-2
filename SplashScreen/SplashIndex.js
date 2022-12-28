import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Logo from '../logo/icons.png';

const SplashIndex = ({navigation }) =>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation .navigate('Home')
        },2000);
    },[]);
    return (
        <View style={{backgroundColor: '#FFC700', flex:1,justifyContent:'center',alignItems:'center'}}>
           <Image source={require('./icons.png')} />
            <Text style={{
                color:'#020202',fontSize:32
            }}>POSIN</Text>
        </View>
    );
};

export default SplashIndex;

