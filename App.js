import React, { Component, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';



import HomeScreen from './HomeScreen';
import ARScreen from './ArApp'
const Stack = createStackNavigator();

export default class App extends Component{
  render() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }} 
                />            
          <Stack.Screen name="ARScreen"
                component={ARScreen}
                options={{
                  headerShown: false,
                }} 
                />            
          </Stack.Navigator>
      </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 60,
    padding: 10

  },
  playButton: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
    marginTop: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    marginTop: 12
  },
  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 8,
    marginTop: 10,
    alignSelf:"center"
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});