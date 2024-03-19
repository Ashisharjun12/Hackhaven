import { View, Text, TextInput,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'


const Meeting = ({navigation}) => {
  const[name ,SetName]=useState("")
  return (
    <View style={styles.container}>

     
        <Image style={{width:'100%',height:'40%',bottom:'20%'}} source={require('../asserts/call.png')}/>
        <Text style={{fontSize:25,color:'black',fontWeight:'500',position:'absolute',top:'38%'}}>Online Meeting Here !</Text>
     
     <Text style={{fontSize:18,color:'black',marginRight:'57%',fontWeight:'500',marginBottom:'4%'}}>Your Name</Text>
       
      <TextInput style={styles.input} placeholder='Your Name'  onChangeText={e=>SetName(e)}/>

      <Text style={{fontSize:18,color:'black',marginRight:'57%',fontWeight:'500',marginBottom:'4%'}}>Joining Code</Text>

      <TextInput style={styles.input} placeholder='Joining Code'  onChangeText={e=>SetName(e)}/>

      <TouchableOpacity onPress={()=>navigation.navigate('StartMeet',{data:name})} style={styles.submit}><Text style={{fontSize:17,color:'black',fontWeight:'500'}} >Join Meeting</Text></TouchableOpacity>
     
    </View>
  )
}

export default Meeting

const styles= StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
   flex:1,
   justifyContent:'center',
   alignItems:'center'
    
  },
  input:{
    paddingLeft: 12,
    fontSize: 15,
    width: "85%",
    borderColor: 'black',
    borderWidth: 0.6,
    borderRadius: 5,
    marginBottom: "3%",
    backgroundColor: 'white',

  },
  submit:{
   
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    color:'black',
    fontWeight:'bold',
    borderWidth:0.6,
    height:42,
    width: '90%',
    marginTop:9,
    marginLeft:12
    
 }
})