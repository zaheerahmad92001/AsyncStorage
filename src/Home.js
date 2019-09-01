import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text,
     View,
     TouchableOpacity,
} from 'react-native';
import {Destroy} from '../src/SessionManagment';

import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {

    constructor(props){
        super(props)        
    }
    static navigationOptions ={
        header:null
    }

      signOut =()=>{

        Destroy().then(
            this.props.navigation.navigate('Auth')
        ).catch( (error) =>{
            console.log("Destroy Error",error)
        });

      }

    render()
    {
        return(
            <View style={styles.container}>
                <Text style={{fontWeight:'bold'}}>
                  Home
                </Text>

                <TouchableOpacity
                onPress ={this.signOut}
                >
                <Text style={{fontWeight:'bold'}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
