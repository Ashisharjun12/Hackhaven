import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import AppwriteContext from '../appwrite/AppwriteContext'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
 const{isLoggedIn,setIsLoggedIn}=useContext(AppwriteContext)
 return (
   <View><Text>hi </Text></View>
    
  )
}

export default Home

const styles = StyleSheet.create({})