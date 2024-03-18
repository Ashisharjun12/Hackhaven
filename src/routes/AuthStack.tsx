import { View, Text } from 'react-native'
import React from 'react'
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack=createNativeStackNavigator()
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Signup'>
       <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
       <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default AuthStack