// import { ScrollView, StyleSheet, Text, View,ImageBackground, TextInput, Image, Touchable, TouchableOpacity } from 'react-native'
// import React, { useEffect, useState,useRef,useCallback } from 'react'
// import DocumentPiker from 'react-native-document-picker'
// import { useContext } from 'react'
// import DatabaseContext from '../appwrite/DatabaseContext'
// import AppwriteContext from '../appwrite/AppwriteContext'
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native'
// import { Databases } from 'appwrite'

// const Profile = () => {
//   const {picdoc,setPicdoc,database} = useContext(DatabaseContext)
//    const {appwrite,currentuserinfo,setCurrentuserinfo}=useContext(AppwriteContext)
//    const[updatpermis,setUpdatpermis]=useState(false)
//    const[updatedName,setUpdatedName]=useState("");
//    const[showBottomTab,setShowBottomTab]=useState(true);
//    const[imagefile,setImagefile]=useState({})
   
//    const navigation=useNavigation();
//    useEffect(() => {
//     navigation.setOptions({
//       tabBarStyle: { display: showBottomTab ? 'flex' : 'none' }
//     });
//   }, [showBottomTab]);
 
//    function handleEditName(){
//     onPress()
//          setUpdatpermis(!updatpermis)
//          if(updatpermis && updatedName){
//            setCurrentuserinfo({ ...currentuserinfo,name:updatedName });    
//         }}
// //image
// const selectDoc = async () => {
//   try {
//     const doc = await DocumentPiker.pick();
//     setPicdoc(doc[0].uri);
//     console.log(doc);
//     const file = new File([doc[0].uri], doc[0].name, { type: doc[0].type });
//     await database.uploadFile(file);
//   } catch (error) {
//     console.error(error);
//   }
// };

    


//    useEffect (()=>{
//    const getuserinfo= async ()=>{
//      try{
//           const datae=await appwrite.getCurrentUser()
//           setCurrentuserinfo(datae)
//      }catch(error){
//       console.log(error)
//      }
//    }
//    getuserinfo()
//   },[])
// // to open BottomSheet
//   const ref = useRef(null);
//   const onPress = useCallback(() => {
//     const isActive = ref?.current?.isActive();
//     if (isActive) {
//       ref?.current?.scrollTo(0);
//       setShowBottomTab(true);
//     } else {
//       ref?.current?.scrollTo(-700);
//       setShowBottomTab(false);
//     }
//   }, []);
//   return (
//        <GestureHandlerRootView>
//       <ScrollView style={{backgroundColor:'red'}}>


//         <View style={styles.container}>
         
//         <View style={styles.profilediv}>
          
//         <TouchableOpacity style={styles.picdiv} onPress={selectDoc} >
//                <ImageBackground 
//                   source={picdoc ? {uri:picdoc}:require('../asserts/boy.png')}
//                   resizeMode='cover'
//                   style={{ width: '100%', height: '100%',}}>
//                 </ImageBackground>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleEditName} 
//         style={styles.editbut}><Image source={updatpermis ? require('../asserts/checked.png'):require('../asserts/edit.png')} resizeMode='contain' style={{height:26,width:'100%'}}>
//         </Image></TouchableOpacity>
        
//         <View style={styles.namediv}>
//         <TextInput value={updatedName} onChangeText={text=>setUpdatedName(text)} placeholder={currentuserinfo.name} readOnly={!updatpermis} style={ [ {borderRadius:5,borderWidth: updatpermis ? 1 : 0},{height:36,fontSize:16,color:'black',marginBottom:'5%' }]} placeholderTextColor="black">
//         </TextInput></View>
        
//         <View style={{marginLeft:18}}><Text style={{fontSize:16,fontWeight:'500',color:'black'}}>0 Project</Text></View>
//         </View>
//         <View style={{marginTop:18,marginLeft:'2%'}}>
//          <Text style={{fontSize:18,color:'black',fontWeight:'500'}}> Add Details</Text>
//          </View>

//          <View style={{marginTop:10,height:300,width:'100%'}}>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={{marginTop:18,padding:12,marginLeft:14,height:'40%',borderRadius:6,width:'50%',backgroundColor:"rgba(220,224,238,1)"}}>
//             <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#E1A369", position:'absolute', bottom:'105%',left:10}}>
//               <Image source={require('../asserts/information.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
//             </View>
//             <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Personal Information</Text></View>
//             <View style={{marginTop:5}}><Text style={{fontSize:16}}>Completed</Text></View>
//           </View>
        
//           <View style={{marginTop:18,padding:12,marginLeft:14,height:'40%',borderRadius:11,width:'50%',backgroundColor:"rgba(220,224,238,1)"}}>
//             <View style={{padding:6,height:26,width:26,borderRadius:10,backgroundColor:"#336DC0", position:'absolute', bottom:'105%',left:10}}>
//               <Image source={require('../asserts/box.png')} resizeMode='contain' style={{height:'100%',width:'100%'}}></Image>
//             </View>
//             <View style={{height:55,width:'100%',marginTop:12,}}><Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Projects & Work</Text></View>
//             <View style={{marginTop:5}}><Text style={{fontSize:16}}>Completed </Text></View>
//           </View>
          
          
//           </ScrollView>
//          </View>

//          <View style={{height:250,width:'100%',position:'absolute',top:'75%',marginLeft:'7%'}}>
//          <View style={{height:34,width:'100%'}}>
//           <Text style={{fontSize:19,color:'black'}}>
//           Social Media
//           </Text>

//           </View>
//           <View style={{flexDirection:'row',gap:7}}>
//             <Image style={{width:40,height:40}} source={require('../asserts/instagram.png')}/>
//           <TextInput style={styles.input} placeholder='Facebook'  onChangeText={e=>SetName(e)}/>
//           </View>
//           <View style={{flexDirection:'row',gap:7}}>
//             <Image style={{width:40,height:40}} source={require('../asserts/linkedin.png')}/>
//           <TextInput style={styles.input} placeholder='Linkdin'  onChangeText={e=>SetName(e)}/>
//           </View>
         
         
//           </View>
          
//         </View>

//         <View style={{flexDirection:'row',gap:7,position:'absolute',top:'90%'}}>
//             <Image style={{width:40,height:40}} source={require('../asserts/github.png')}/>
//           <TextInput style={styles.input} placeholder='Github'  onChangeText={e=>SetName(e)}/>
//           </View>
//       </ScrollView>
  
//       </GestureHandlerRootView>
//   )
// }

// export default Profile

// const styles = StyleSheet.create({
//   container:{
//     marginTop:'4%',
//     flex:1,
//     padding:14,

//   },
  
//   profilediv:{
//     height:"20%",
//     width:'100%',
//     marginTop:34,
//     borderRadius:15,
//     backgroundColor:'rgba(220,224,238,0.51)',
    
//   },
//   picdiv:{
//     height:67,
//     width:67,
//     borderRadius:99,
//     backgroundColor:'rgba(90, 121, 235, 0.728)',
//     position:'absolute',
//     borderWidth:1,
//     borderColor:'rgba(220,224,238,1)',
//     elevation:5,
//     shadowColor:'purple',
//     bottom:86,
//     left:25,
//     overflow:'hidden'
    
//   },

//   input:{
//     paddingLeft: 12,
//     fontSize: 15,
//     width: "85%",
//     borderColor: 'black',
//     borderWidth: 0.6,
//     borderRadius: 5,
//     marginBottom: "3%",
//     backgroundColor: 'white',

//   },
//   editbut:{
//     height:20,
//     width:48,
//     position:'absolute',
//     left:282,
//     top:12
//   },
//   namediv:{
//     height:40,
//     width:'80%',
//     marginTop:55,
//     paddingLeft:16,
//     overflow:'hidden'
//   }
// })

import { View, Text, Image, TouchableOpacity,TextInput } from 'react-native'
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

    function handleEditName(){
          
               setUpdatpermis(!updatpermis)
               if(updatpermis && updatedName){
                 setCurrentuserinfo({ ...currentuserinfo,name:updatedName });    
              }}

  return (
    <View>
     
     
     <View style={{width:'90%',height:'45%',backgroundColor:'rgba(173, 186, 235, 0.51)',alignSelf:'center',marginTop:'15%',borderRadius:25}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

      <Text style={{fontSize:19,fontWeight:'500',marginLeft:'5%',marginTop:'14%',color:'black'}}>Ashish Raj</Text>

<TouchableOpacity onPress={handleEditName}  style={{marginRight:18,marginTop:27}}
><Image source={updatpermis ? require('../asserts/checked.png'):require('../asserts/edit.png')} resizeMode='contain' style={{height:30,width:30}} />
  </TouchableOpacity>

      </View>

      <View >
       <TextInput value={updatedName} onChangeText={text=>setUpdatedName(text)} placeholder={currentuserinfo.name} readOnly={!updatpermis} style={ [ {borderRadius:5,backgroundColor:'white',width:'80%',marginLeft:'2%', borderWidth: updatpermis ? 1 : 0}]} placeholderTextColor="black">
      </TextInput></View>
   

     </View>
     <TouchableOpacity onPress={selectDoc} style={{marginLeft:'12%',position:'absolute',marginTop:'6%',borderRadius:99}}>
     <Image  style={{width:65,height:65,borderRadius:99}} source={picdoc ? {uri:picdoc}:require('../asserts/boy.png')} />
     </TouchableOpacity>
    
 
    </View>
  )
}

export default Profile