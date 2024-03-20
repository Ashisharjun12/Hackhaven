// route screen is inside the AppStack
import {ScrollView, StyleSheet, Text, View,TouchableOpacity,Image,Linking} from 'react-native';
import React, { useState,useEffect } from 'react';
import AppwriteContext from '../appwrite/AppwriteContext';
import { useContext } from 'react';
import DatabaseContext from '../appwrite/DatabaseContext';

const Projectdetails = ({route}) => {
    const{appwrite}=useContext(AppwriteContext)
    const {database}=useContext(DatabaseContext)
    const[userinfo,setUserinfo]=useState({})
    const[userinfodiv,setUserinfodiv]=useState(false)
  const productdetails = route.params;
  const Technologyparts = productdetails.technology
    .split(',')
    .map(part => part.trim());
  const Requirementparts = productdetails.requirement
    .split(',')
    .map(part => part.trim());


// 
     
    const handleinroll=()=>{
           setUserinfodiv(!userinfodiv)
    }


  return (
    
        <View>
            <View >
                <View ><Text style={{fontSize:19,fontWeight:'500',color:'black',marginLeft:'5%',marginTop:'10%'}}>{productdetails.title}</Text></View>
                <View ><Text style={{fontSize:17,fontWeight:'500',color:'black',marginLeft:'5%',marginTop:'5%'}}>{productdetails.content}</Text></View>
                <Text style={{fontSize:15,fontWeight:'500',marginTop:'7%',marginLeft:'7%',color:'black'}}>Technology Used</Text>
           
           <View style={{marginTop:'5%',marginBottom:'6%',marginLeft:'5%'}} >
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {Technologyparts.map((part, index) => (
               <View key={index} style={styles.textContainer}>
          <Text style={{color:'black'}} >{part}</Text>
           </View>
            ))}
            </ScrollView>
             </View>
             <Text style={{fontSize:15,fontWeight:'500',marginLeft:'7%',color:'black',marginBottom:'5%'}} >Requirement</Text>
           <View  style={{marginLeft:'5%',marginBottom:'5%'}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {Requirementparts.map((part, index) => (
               <View key={index} style={styles.textContainer}>
          <Text style={{color:'black'}} >{part}</Text>
           </View>
            ))}
        
            </ScrollView>
             </View>
            <Text style={{fontSize:16,marginTop:12,marginLeft:'25%',color:'black',fontWeight:'500',marginBottom:'7%'}}>Apply For This Project</Text>
           
            <TouchableOpacity onPress={handleinroll} style={styles.submit}><Text style={{fontSize:17,color:'black',fontWeight:'500'}} >Let's Start</Text></TouchableOpacity>
           
           { userinfodiv && 
           <View style={{flexDirection:'row',marginTop:'5%'}}>
              <Image style={{width:40,height:40,marginRight:'3%',marginLeft:'2%'}} source={require('../asserts/github.png')}/>
           <TouchableOpacity onPress={() => Linking.openURL(productdetails.github)}><Text style={styles.social}>{productdetails.github}</Text></TouchableOpacity></View>}
            </View>
        </View>

   
  )
}

export default Projectdetails;

const styles = StyleSheet.create({
 
 
social:{
  paddingLeft: 12,
  fontSize: 18,
  width: "100%",
  height:42,
  color:'#1980B8',
  justifyContent:"center",
  alignItems:'center',
 borderColor: 'black',
 borderWidth: 0.6,
  borderRadius: 5,
  marginBottom: "3%",
  backgroundColor: 'white'
},
textContainer:{
    marginHorizontal: 5,
        marginTop: 5,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(220,224,238,1)',
        
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


});
