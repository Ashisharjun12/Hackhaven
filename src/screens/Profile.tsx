

import { View, Text, Image, TouchableOpacity,TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState,useRef,useCallback } from 'react'
import DocumentPiker from 'react-native-document-picker'
import { useContext } from 'react'
import DatabaseContext from '../appwrite/DatabaseContext'
import AppwriteContext from '../appwrite/AppwriteContext'
import { Link, useNavigation } from '@react-navigation/native'
import { Databases } from 'appwrite'

const Profile = ({navigation}) => {

  
      const {picdoc,setPicdoc,database,uniqueId,setUniqueId} = useContext(DatabaseContext)
       const {appwrite,currentuserinfo,setCurrentuserinfo}=useContext(AppwriteContext)
       const[updatpermis,setUpdatpermis]=useState(false)
       const[updatedName,setUpdatedName]=useState({});
       const[instagram,setInstagram]=useState("");
       const[linkedin,setLinkedin]=useState("");
       const[facebook,setFacebook]=useState("");
       const[githublink,setGithublink]=useState("");
  
        useEffect(()=>{
         setUniqueId(uniqueId)
        },[uniqueId])
       const handlesubmit = async () => {
        // console.log("qu", uniqueId);
        const title="nononn"
        const links = {
          uniqueId,
          instagram,
          facebook,
          linkedin,
          githublink,
        };
            await database.updatePost({links})
            .then((resposnce)=>{
              setInstagram('')
              setFacebook('')
              setGithublink('')
              setInstagram('')
              setLinkedin('')

            })
      };
     
     useEffect(()=>{
          handlesubmit()
     },[uniqueId])

     const handlelogout=()=>{
      appwrite.logout()
      .then(()=>{
        navigation.navigate('AuthStack')
      })
     }
     ///
    useEffect(() => {
      const fetchdata = async () => {
        try {
          const response = await database.getPost(uniqueId);
          setUpdatedName(response?.documents);
          console.log("respo",response)
        } catch(error) {
          console.log("fetchdata alldata", error)
        }
      }
      fetchdata();
    }, [uniqueId]);
    console.log(updatedName)
////
  const selectDoc = async () => {
      try {
        const doc = await DocumentPiker.pick();
        setPicdoc(doc[0].uri);
      
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

  

  return (
    <ScrollView>
    
    <View style={{height:'100%',width:'100%',backgroundColor:'rgba(252, 253, 255, 0.51)'}}>
     
     <View style={{width:'90%',height:150,backgroundColor:'rgba(160, 177, 238, 0.51)',alignSelf:'center',marginTop:'15%',borderRadius:25}}>
 
      <Text style={{fontSize:21,fontWeight:'500',marginLeft:'7%',marginTop:'14%',color:'black'}}>{currentuserinfo.name}</Text>
      <Text style={{fontSize:17,fontWeight:'500',marginLeft:'7%',marginTop:'5%',color:'black'}}>0 Projects</Text>
      <TouchableOpacity style={{position:'absolute',top:36,marginLeft:'61%',padding:9,backgroundColor:'#74E291',borderRadius:5,marginRight:'5%',borderWidth:0.5}}>
      <Text style={{fontSize:15,fontWeight:'400',color:'black',marginLeft:12}}>My Works +</Text>
      </TouchableOpacity>
     
   
     </View>
     <TouchableOpacity onPress={selectDoc} style={{marginLeft:'12%',position:'absolute',marginTop:'6%',borderRadius:99}}>
     <Image  style={{width:65,height:65,borderRadius:99}} source={picdoc ? {uri:picdoc}:require('../asserts/boy.png')} />
     </TouchableOpacity>
     <View style={{flexDirection:'row',gap:16,marginLeft:'5%',marginTop:'4%'}}>
     <View style={{width:36,height:36,backgroundColor:'#74E291',borderRadius:7,position:'absolute',marginTop:4,marginLeft:10}}>
      <Image style={{width:25,height:25,position:'absolute',alignSelf:'center',marginTop:'5%'}} source={require('../asserts/edu.png')} />
      </View>
     <View style={{width:36,height:36,backgroundColor:'orange',borderRadius:7,position:'absolute',marginTop:4,marginLeft:200}}>
      <Image style={{width:25,height:25,position:'absolute',alignSelf:'center',marginTop:'5%'}} source={require('../asserts/user.png')} />
      </View>
     <View style={{width:'45%',height:150,backgroundColor:'rgba(172, 186, 235, 0.51)',borderRadius:12,marginTop:'6%'}}>
      

      <Text style={{fontSize:15,color:'black',fontWeight:'500',marginTop:"13%",marginLeft:"7%"}}>Education</Text>
      <Text style={{fontSize:14,marginTop:"5%",marginLeft:"7%"}}>{"Add Gradutation \n Year"}</Text>
      <TouchableOpacity style={{marginTop:'6%',marginLeft:'15%',padding:5,backgroundColor:'#74E291',marginRight:'43%',borderWidth:0.5,borderRadius:4}}>
        <Text style={{fontSize:15,fontWeight:'400',color:'black',marginLeft:'12%'}}>Add +</Text>
     </TouchableOpacity>
     </View>
     <View style={{width:'45%',height:150,backgroundColor:'rgba(172, 186, 235, 0.51)',borderRadius:12,marginTop:'6%'}}>
     <Text style={{fontSize:15,color:'black',fontWeight:'500',marginTop:"13%",marginLeft:"7%"}}>Networking</Text>
     <Text style={{fontSize:14,marginTop:"5%",marginLeft:"7%"}}>Add User Links</Text>
     <TouchableOpacity style={{marginTop:'10%',marginLeft:'15%',padding:5,backgroundColor:'#74E291',marginRight:'43%',borderWidth:0.5,borderRadius:4}}>
        <Text style={{fontSize:15,fontWeight:'400',color:'black',marginLeft:'12%'}}>Add +</Text>
     </TouchableOpacity>
     </View>

</View>

<View style={{marginLeft:'8%',marginTop:'8%'}}>
  <Text style={{fontSize:19,fontWeight:'500',color:'black'}}>
    Social Links
  </Text>

  <View style={{flexDirection:'row',gap:7,marginTop:'6%'}}>
            <Image style={{width:40,height:40,marginRight:'3%'}} source={require('../asserts/instagram.png')}/>
         <TextInput style={styles.input} placeholder='Facebook'  onChangeText={e=>setFacebook(e)}/>   
              </View>
  <View style={{flexDirection:'row',gap:7,marginTop:'4%'}}>
            <Image style={{width:40,height:40,marginRight:'3%'}} source={require('../asserts/linkedin.png')}/>
         <TextInput style={styles.input} placeholder='Linkedin'  onChangeText={e=>setLinkedin(e)}/>   
              </View>
  <View style={{flexDirection:'row',gap:7,marginTop:'4%'}}>
            <Image style={{width:40,height:40,marginRight:'3%'}} source={require('../asserts/github.png')}/>
         <TextInput style={styles.input} placeholder='Github'  onChangeText={e=>(e)}/>   
              </View>

              <TouchableOpacity  style={styles.submit}><Text style={{fontSize:17,color:'black',fontWeight:'500'}} >Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlelogout} style={styles.submit}><Text style={{fontSize:17,color:'black',fontWeight:'500'}} >Logout</Text>
              </TouchableOpacity>

  </View>
    </View>
    </ScrollView>
  )
}

export default Profile


const styles=StyleSheet.create({
  input:{
        paddingLeft: 12,
        fontSize: 15,
        width: "75%",
       borderColor: 'black',
       borderWidth: 0.6,
        borderRadius: 5,
        marginBottom: "3%",
        backgroundColor: 'white'
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
  marginTop:19,
  marginLeft:2
  
}


})