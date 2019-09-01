import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { setUserData } from './SessionManagment';
import { getUserData } from './SessionManagment';


const userInfo = {
    email: 'zaheer@gmail.com',
    pass: '12345'

};


export default class Login extends Component {
    static navigationOptions ={
        header:null
    };
    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    handleLogin = () => {
        let scop = this;
        if (userInfo.email === this.state.email && userInfo.pass === this.state.password) {

            user = {
                email: this.state.email,
                password: this.state.password
            }

            setUserData(user).then(
             ()=>{scop.props.navigation.navigate('App')})
            .catch( (error)=>{
                console.log(error)
            })

        } else {
            alert("email or pass incorrect ")
        }
    }

    handleUserData = () => {
            
           AsyncStorage.getItem('userinfo')
           .then((value) => {
             const data = JSON.parse(value);
             //console.log('name is ', data.email);
             if ('zaheer@gmail.com' === data.email){
                 alert("on Right path")
             }
           }).catch((error) =>{
             console.log(" Error in getting data ",error)
           });
            
    }
   
    render() {

        return (
            <View style={styles.container}>
                <Text>Login</Text>
                {
                    this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>
                }
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />

                <TouchableOpacity
                    style={styles.LoginButton}
                    onPress={this.handleLogin}
                >
                    <Text style={{ textAlign: "center", color: 'white', fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.LoginButton}
                    onPress={this.handleUserData}
                >
                    <Text style={{ textAlign: "center", color: 'white', fontWeight: 'bold' }}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
    LoginButton: {
        backgroundColor: 'red',
        height: 45,
        width: '70%',
        justifyContent: "center",
        marginVertical: 10,
    }
})

