import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Welcome extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            password:""
        }
    }
render(){
    return(
        <View style={styles.container}>
            <View >
                
            
        <Text style = {
            styles.title
        }>
            Book Santa
        </Text>

        </View>

        <TextInput style = {styles.loginBox}
        placeholder="abcd@gmail.com"
        keyboardType = "email-address"
        onChangeText = {
            (text)=>{
            this.setState({
                emailId:text
            })
            }
        }
        > 
        </TextInput>


        ]
        <TextInput style = {styles.loginBox}
        placeholder="enter password"
        secureTextEntry = {true}
        onChangeText = {
            (text)=>{
            this.setState({
                password:text
            })
            }
        }

        
        
        
        >
            
        </TextInput>
        <TouchableOpacity style = {styles.button}>
            <Text style = {[styles.buttonText,{marginBottom:20,marginTop:20}]}>
             Login
            </Text>
        </TouchableOpacity>


        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>
                SignUp
            </Text>
        </TouchableOpacity>

        </View>
    )
}
    
}


const styles=StyleSheet.create({
    title:{fontSize:60,
    fontWeight:"300",
paddingBottom:30,
color:"#ff3d00"},

container:{
    flex:1,
    backgroundColor:"#f8be85"
},
loginBox:{width:200,
height:40,
borderBottomWidth:1.5,
borderColor:"#f2a34b",
fontSize:20,
margin:10,
padding:10},


button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20  
  }
})










