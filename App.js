
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
Button,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import AsyncStorage from '@react-native-community/async-storage';
import Home from './src/Home';
import Login from './src/Login';
import SplashScreen from './src/SplashScreen';

 class App extends Component {


  render() {
    return (
      
        <View>
          <AppContainer/>
        </View>
      
    );
  }
}

const AppStack = createStackNavigator({
  Home: Home,
  });
const AuthStack = createStackNavigator({ 
  
  Login:Login,
 
});

export default AppContainer =createAppContainer(createSwitchNavigator(
   {
    SplashScreen:SplashScreen,   
     App: AppStack,
     Auth: AuthStack,
   },
   {
     initialRouteName: 'SplashScreen',
   }
 ));
