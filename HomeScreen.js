import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Welcome To My AR Resume Experince </Text>
        <Text style={styles.forgot}>Instruction:- Download the resume from the below download button and print it on a A4 size paper. Scan the complete page. </Text>
        <TouchableOpacity style={styles.loginBtn}
        onPress={() => this.props.navigation.navigate('ARScreen')}>
          <Text style={styles.loginText}>SCAN RESUME</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={ ()=>{ Linking.openURL('https://drive.google.com/file/d/1VAqI7FtDQu2a_w4y7Rt5j-Mi60xBrcnO/view?usp=sharing')}}
        style={styles.loginBtn}>
          <Text style={styles.loginText}>DOWNLOAD RESUME</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={ ()=>{ Linking.openURL('https://github.com/atharvasiddhabhatti/AR_Resume')}}
        style={styles.loginBtn}>
          <Text style={styles.loginText}>APP SOURCE CODE</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:15,
    fontWeight:"bold",
    padding:5
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});