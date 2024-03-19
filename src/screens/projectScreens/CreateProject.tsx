import { TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import DatabaseContext from '../../appwrite/DatabaseContext';
import { useContext } from 'react';
import AppwriteContext from '../../appwrite/AppwriteContext';
import Snackbar from 'react-native-snackbar';
import DocumentPiker from 'react-native-document-picker'

///////
const CreateProject = () => {
  const [userId, setUserId] = useState('')
  const { database,uniqueId,setUniqueId} = useContext(DatabaseContext)
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext)
////////
  //remove from all 
  const [picdoc,setPicdoc]=useState("")
  const [error, setError] = useState('')
  const [title, setTitle] = useState('')
  const [github, setGithub] = useState('')
  const [content, setContent] = useState('')
  const [featuredImage, setFeaturedImage] = useState('')
  const [Requirement, setRequirement] = useState('')
  const [TechnologyUsed, setTechnologyUsed] = useState('')
  
  const selectDoc = async ()=>{
    try{
      const doc=await DocumentPiker.pick()
      console.log(doc[0].uri)
     setPicdoc(doc[0].uri);
    }catch(error){
      if(DocumentPiker.isCancel(e))
      console.log("user cancelled the upload ",e);
    else{
      console.log(error)
    }
  }
  }

  useEffect(() => {
    console.log("uni", uniqueId);

  }, [uniqueId]);

  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36);
  }
  
  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((responce) => {
        setUserId(responce?.$id)
        console.log("update", userId)
      })
  }, [userId])


  const handlesubmit = () => {
    if (
      title.length < 1 ||
      content.length < 1 ||
      TechnologyUsed.length < 1 ||
      Requirement.length < 1 ||
      github.length < 1
      ) {
        setError('All fields are required');
        Snackbar.show(({
          text: error,
          duration: Snackbar.LENGTH_LONG
        }))
      }
      else {
      const status="active"
      setUniqueId(generateUniqueId())
    console.log("bottom",uniqueId)
      setError('')
      const data = {
        uniqueId,
        title,
        content,
        status,
        TechnologyUsed,
        userId,
        Requirement,
        github
      };
         database
        .createPost(data)
        .then((responce) => {
          if (responce) {
            setContent('')
            setGithub('')
            setRequirement('')
            setTitle('')
            setUserId('')
            setTechnologyUsed('')
            Snackbar.show(({
              text: "successfully created project",
              duration: Snackbar.LENGTH_LONG
            }))
            
          }
          else {
            console.log("errp")
          }
        })

    }
    Snackbar.show(({
      text: error,
      duration: Snackbar.LENGTH_LONG
    }))
  }



  return (
    <KeyboardAvoidingView  
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <ScrollView   style={{backgroundColor:'rgba(220,224,238,0.5)'}}>
        <View style={styles.container}>
          <View >
            <Text style={{ fontSize: 18,marginBottom:'2%', justifyContent:'flex-start',color:'black',marginLeft:'3%' }}>Project name / Project Title</Text>
            <TextInput style={styles.input}
              placeholder='Project Name'
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <Text style={{ fontSize: 18,marginBottom:'2%', justifyContent:'flex-start',color:'black',marginLeft:'3%' }}>Technology Used</Text>
            <TextInput style={styles.input}
              placeholder='Ex - React , Next , MongoDb '
              value={TechnologyUsed}
              onChangeText={text => setTechnologyUsed(text)}
            />
            <Text style={{ fontSize: 18,marginBottom:'2%', justifyContent:'flex-start',color:'black',marginLeft:'3%' }}>Requirements </Text>
            <TextInput style={styles.input}
              placeholder='Ex - React Developer'
              value={Requirement}
              onChangeText={text => setRequirement(text)}
            />
          </View>
          {/*second part*/}

          <View style={{marginTop:"-23%"}}>
            <Text style={{fontSize:17 ,color:'black',fontWeight:'500',marginLeft:'3%',marginBottom:'5%'}}>Upload Image</Text>
            <View style={{ flexDirection: 'row'}}>
             
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'7%',marginLeft:'5%'}}>

             
                <View style={{width:75,height:65}}>
                  <Image  source={picdoc ? {uri:picdoc}:require('../../asserts/imp.png')}
                  style={{ width: '100%', height: '100%', marginLeft:'5%'}}
                  />
                
                </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height:45, width: "44%", marginLeft: "25%", marginTop: 6, borderWidth: 0.6, borderRadius: 4, borderColor: '#0d0c0c' }}>
                <Image source={require('../../asserts/upload.png')} style={{width:"30%",height:'74%' }} />
                <TouchableOpacity onPress={selectDoc} ><Text style={{ fontWeight: '500',color:'black' }}>Upload </Text>
                </TouchableOpacity>
              </View>

              </View>
              
            </View>
            <Text style={{ fontSize:18,fontWeight:'500',color:'black',marginLeft:'3%',marginBottom:'5%'}}>Github  Link</Text>
            <TextInput
              style={[styles.input, { height: 44, fontSize: 16 }]}
              placeholder='Github Repository Link '
              value={github}
              onChangeText={text => setGithub(text)}
            />
          </View>
      <Text style={{fontSize:17,fontWeight:'500',color:'black',marginLeft:'4%',marginTop:'2%',marginBottom:'2%'}}>Description</Text>
          <TextInput
            multiline
            style={[styles.input, { textAlignVertical: 'top', height: 100, fontSize: 18,  marginTop: 2, width: '95%',marginBottom:10 }]}
            placeholder='Write a brief about your Project'
            value={content}
            onChangeText={text => setContent(text)}
          //  onContentSizeChange={handleContentSizeChange}
          />


          <TouchableOpacity style={{ height: 12, width: 120, backgroundColor: 'red', marginLeft: 44,marginTop:80 }}><Text>Nothing</Text></TouchableOpacity>
       
        </View>



      </ScrollView>

      <TouchableOpacity onPress={handlesubmit} style={{   justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    borderWidth:0.6,
    height:42,
    width: '90%',
    marginTop:10,
    marginLeft:12,
    }}>
        <Text style={{marginLeft:'3%',fontSize:15,fontWeight:'500',color:'black'}}>Done</Text>
        </TouchableOpacity>

    </KeyboardAvoidingView>
  )


}

export default CreateProject

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:'3%',
    marginTop:'5%'
  
  },

  input: {
    paddingLeft: 15,
    fontSize: 15,
    height: "12%",
    width: "96%",
    borderColor: 'black',
    borderWidth: 0.6,
    borderRadius: 8,
    marginBottom: "3%",
    backgroundColor: 'white',

  },
  dppicdiv: {
    height: 85,
    width: 85,
    borderRadius: 30,
    backgroundColor: 'white',
  },



})