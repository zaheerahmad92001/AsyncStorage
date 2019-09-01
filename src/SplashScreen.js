import React,{Component}from 'react'
import { 
    View, 
    Text,
     StyleSheet,
     ActivityIndicator,
     Image,
     }from 'react-native';
     import AsyncStorage from '@react-native-community/async-storage';
     let data =null;
     export default class SplashScreen extends Component{

      componentDidMount(){

        let scop = this;
        AsyncStorage.getItem('userinfo')
        .then((value) => {
         data = JSON.parse(value);
          scop.props.navigation.navigate(data !=null ? 'App' : 'Auth')  
        }).catch((error) =>{
          console.log(" Error in getting data ",error)
        });

      }
        render() {
            return (
              <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
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
     