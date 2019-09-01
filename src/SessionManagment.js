import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
Button,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export const setUserData =(data)=>{
    
return AsyncStorage.setItem('userinfo',JSON.stringify(data))

}

export const  getUserData= ()=>{
 return AsyncStorage.getItem('userinfo')
.then( (value) => {
    const data = JSON.parse(value)
    console.log("user data", data)
}).catch(error => console.log('error!'));
return value
}

export const Destroy =()=>{
   return AsyncStorage.removeItem('userinfo')
    
}