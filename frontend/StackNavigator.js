import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/firstHome';
import Second from './pages/Second';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Second" component={Second} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator