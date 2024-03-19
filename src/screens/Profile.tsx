import { ScrollView, StyleSheet, Text, View,ImageBackground, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState,useRef,useCallback } from 'react'
import DocumentPiker from 'react-native-document-picker'
import { useContext } from 'react'
import DatabaseContext from '../appwrite/DatabaseContext'
import AppwriteContext from '../appwrite/AppwriteContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { Databases } from 'appwrite'

const Profile = () => {
  const {picdoc,setPicdoc,database} = useContext(DatabaseContext)
   const {appwrite,currentuserinfo,setCurrentuserinfo}=useContext(AppwriteContext)
   const[updatpermis,setUpdatpermis]=useState(false)
   const[updatedName,setUpdatedName]=useState("");
   const[showBottomTab,setShowBottomTab]=useState(true);
   const[imagefile,setImagefile]=useState({})
   
   const navigation=useNavigation();
   useEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: showBottomTab ? 'flex' : 'none' }
    });
  }, [showBottomTab]);
 
   function handleEditName(){
    onPress()
         setUpdatpermis(!updatpermis)
         if(updatpermis && updatedName){
           setCurrentuserinfo({ ...currentuserinfo,name:updatedName });    
        }}
//image
const selectDoc = async () => {
  try {
    const doc = await DocumentPiker.pick();
    setPicdoc(doc[0].uri);
    console.log(doc);
    const file = new File([doc[0].uri], doc[0].name, { type: doc[0].type });
    await database.uploadFile(file);
  } catch (error) {
    console.error(error);
  }
};

    


   useEffect (()=>{
   const getuserinfo= async ()=>{
     try{
          const datae=await appwrite.getCurrentUser()
          setCurrentuserinfo(datae)
     }catch(error){
      console.log(error)
     }
   }
   getuserinfo()
  },[])
// to open BottomSheet
  const ref = useRef(null);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
      setShowBottomTab(true);
    } else {
      ref?.current?.scrollTo(-700);
      setShowBottomTab(false);
    }
  }, []);
  return (
       <GestureHandlerRootView>
      <ScrollView>

  

        <View style={styles.container}>
         
        <View style={styles.profilediv}>
          
        <TouchableOpacity style={styles.picdiv} onPress={selectDoc} >
               <ImageBackground 
                  source={picdoc ? {uri:picdoc}:require('../asserts/boy.png')}
                  resizeMode='cover'
                  style={{ width: '100%', height: '100%',}}>
                </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEditName} 
        style={styles.editbut}><Image source={updatpermis ? require('../asserts/checked.png'):require('../asserts/edit.png')} resizeMode='contain' style={{height:26,width:'100%'}}>
        </Image></TouchableOpacity>
        
        <View style={styles.namediv}>
        <TextInput value={updatedName} onChangeText={text=>setUpdatedName(text)} placeholder={currentuserinfo.name} readOnly={!updatpermis} style={ [ {borderRadius:5,borderWidth: updatpermis ? 1 : 0},{height:36,fontSize:16,color:'black',marginBottom:'5%' }]} placeholderTextColor="black">
        </TextInput></View>
        
        <View style={{marginLeft:18}}><Text style={{fontSize:16,fontWeight:'500',color:'black'}}>0 Project</Text></View>
        </View>
        <View style={{marginTop:18,marginLeft:'2%'}}>
         <Text style={{fontSize:18,color:'black',fontWeight:'500'}}> Add Details</Text>
         </View>

         <View style={{marginTop:10,height:160,width:'100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginTop:18,padding:12,marginLeft:14,height:120,borderRadius:11,width:116,backgroundColor:"rgba(220,224,238,1)"}}>
            <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#E1A369", position:'absolute', bottom:104,left:10}}>
              <Image source={require('../asserts/information.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
            </View>
            <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Personal Information</Text></View>
            <View style={{marginTop:5}}><Text>Completed</Text></View>
          </View>
        
          <View style={{marginTop:18,padding:12,marginLeft:14,height:120,borderRadius:11,width:116,backgroundColor:"rgba(220,224,238,1)"}}>
            <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#336DC0", position:'absolute', bottom:104,left:10}}>
              <Image source={require('../asserts/box.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
            </View>
            <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Projects & Work</Text></View>
            <View style={{marginTop:5}}><Text>Completed </Text></View>
          </View>
          
          <View style={{marginTop:18,padding:12,marginLeft:14,height:120,borderRadius:11,width:116,backgroundColor:"rgba(220,224,238,1)"}}>
            <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#44A84E", position:'absolute', bottom:104,left:10}}>
              <Image source={require('../asserts/graduation.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
            </View>
            <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Education Details</Text></View>
            <View style={{marginTop:5}}><Text>Completed</Text></View>
          </View>
          <View style={{marginTop:18,padding:12,marginLeft:14,height:120,borderRadius:11,width:116,backgroundColor:"rgba(220,224,238,1)"}}>
            <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#0F4DA0", position:'absolute', bottom:104,left:10}}>
              <Image source={require('../asserts/chat.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
            </View>
            <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Social Media</Text></View>
            <View style={{marginTop:5}}><Text>Completed-></Text></View>
          </View>
          
          </ScrollView>
         </View>

         <View style={{height:250,width:'100%',}}>
         <View style={{height:34,width:'100%'}}><Text style={{fontSize:16}}>The Above Info Provided</Text></View>
         
          </View>
        </View>
      </ScrollView>
  
      </GestureHandlerRootView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    marginTop:'4%',
    flex:1,
    padding:14,

  },
  
  profilediv:{
    height:"20%",
    width:'100%',
    marginTop:34,
    borderRadius:15,
    backgroundColor:'rgba(220,224,238,0.51)',
    
  },
  picdiv:{
    height:67,
    width:67,
    borderRadius:99,
    backgroundColor:'rgba(90, 121, 235, 0.728)',
    position:'absolute',
    borderWidth:1,
    borderColor:'rgba(220,224,238,1)',
    elevation:5,
    shadowColor:'purple',
    bottom:86,
    left:25,
    overflow:'hidden'
    
  },
  editbut:{
    height:20,
    width:48,
    position:'absolute',
    left:282,
    top:12
  },
  namediv:{
    height:40,
    width:'80%',
    marginTop:55,
    paddingLeft:16,
    overflow:'hidden'
  }
})