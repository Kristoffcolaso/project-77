import { cyan } from 'color-name';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from '../config'
import firebase from 'firebase'
export default class WelcomeScreen extends React.Component{
    constructor(){
    super()
    this.state={
        emailId:'',
        password:''
    }
    }
render(){
    return(
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>BookSanta</Text>
        </View>
        <View>
        <TextInput style={styles.loginBox}
    placeholder="example@bookSanta.com"
    placeholderTextColor="#ffff"
    keyboardType='email-address'
    onChangeText={(text)=>{
        this.setState({
            emailId:text
        })
    }}
    ></TextInput>
            <TextInput style={styles.loginBox}
    placeholder="password"
    placeholderTextColor="#ffff"
    secureTextEntry={true}
    onChangeText={(text)=>{
        this.setState({
            password:text
        })
    }}
    ></TextInput>
    <TouchableOpacity>
    <Text>login</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text>sign up</Text>
    </TouchableOpacity>
        </View>
    </View>
   )
}
}
const styles=StyleSheet.create({
container:{
flex:1,
backgroundColor:'cyan'
    },
 title:{
fonSize:65,
fontWeight:'300',
paddingBottom:30,
color:'#ff3d00'
}
})