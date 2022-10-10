import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function App() {

 
  
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style='dark'/>
    </NavigationContainer>
  );


};
