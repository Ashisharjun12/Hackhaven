import { View, Text,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Project from '../../screens/Project'
import Profile from '../../screens/Profile'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useContext } from 'react'
import DatabaseContext from '../../appwrite/DatabaseContext'
import Meeting from '../../screens/Meeting'
import Chat from '../../screens/Chat'
const BotTab=createBottomTabNavigator()

const BottomTab = () => {
  const {picdoc} = useContext(DatabaseContext)

  const route = useRoute();
  return (
    <BotTab.Navigator initialRouteName='Project'
    screenOptions={{
      headerShown: false, 
      tabBarActiveTintColor:'#9195F6',
      tabBarInactiveTintColor:'grey'
      
      
    }}
    >
        <BotTab.Screen
        name='Project'
        component={Project}
        options={{headerShown:false , tabBarIcon:({color,size})=>(
          <AntDesign name="appstore1" color={color} size={size} />
        ) }}
      
        />
        <BotTab.Screen
        name='Meeting'
        component={Meeting}
        options={{headerShown:false , tabBarIcon:({color,size})=>(
          <Ionicons name="people" color={color} size={size} />
        )}
        }
        />
        <BotTab.Screen
        name='Chat'
        component={Chat}
        options={{headerShown:false , tabBarStyle:{display:'none'}, tabBarIcon:({color,size})=>(
          <Entypo name="chat" color={color} size={size} />
        )}
        
        }
        />
        <BotTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: () => (
            <View style={{width:35,borderRadius:17}}>
            <Image source={picdoc ? {uri:picdoc}:require('../../asserts/boy.png')}resizeMode='cover' style={{height:'100%',width:'100%',borderRadius:50}}></Image>
            </View>),
        }}
        />

        
    </BotTab.Navigator>
  )
}

export default BottomTab