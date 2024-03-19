import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Allproject from './projectScreens/Allproject'
import CreateProject from './projectScreens/CreateProject'

const Top=createMaterialTopTabNavigator()
const Project = () => {
  return (
    <Top.Navigator initialRouteName='Allproject'
    screenOptions={{
     
      tabBarLabelStyle: { fontSize:14,color:'black'},
      tabBarContentContainerStyle:{height:50},
    
    }}
    >
      <Top.Screen
      
      name='All Project'
      component={Allproject}
      />
      <Top.Screen
      name='Create  Project'
      component={CreateProject}
      />
      
    </Top.Navigator>
  
  )
}

export default Project

