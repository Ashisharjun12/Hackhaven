import { StyleSheet, Text, View,TouchableOpacity,KeyboardAvoidingView,ScrollView,ImageBackground,TextInput,Pressable} from 'react-native'
import React from 'react'
import Snackbar from 'react-native-snackbar'
import { useContext,useState } from 'react'
import AppwriteContext from '../appwrite/AppwriteContext'
const Login = ({navigation}) => {
  const[email,setEmail]=useState('')
  const[error,setError]=useState('')
  const[password,setPassword]=useState('')

  const {appwrite,setIsLoggedIn}=useContext(AppwriteContext)
  
  const validateEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };
  const handleSubmit=()=>{
  
    if (
    email.length < 1 ||
    password.length < 1
    ) {
      setError('All fields are required');
    }
      else if (!validateEmail(email)) {
        setError('Please enter a valid email address');
      } else if (!validatePassword(password)) {
        setError('Password must be at least 8 characters long');
  
    } else {
      const user = {
        email,
        password,
      
      };
      appwrite
      .login(user)
      .then((responce)=>{
        if(responce){
          setIsLoggedIn(true)
          Snackbar.show(({
            text: 'Login success',
            duration:Snackbar.LENGTH_LONG,
          }))
        }
        
      })
}
Snackbar.show(({
  text:error,
  duration:Snackbar.LENGTH_LONG
}))
}

  return (

    
    <KeyboardAvoidingView
    behavior={Platform.OS==='android'? 'padding':'height'}
    >
        <ScrollView  style={{ backgroundColor:'#B7C9F2',
    height:'100%'}}>
        
        
    <View style={styles.container}>
       
      <View style={styles.card}>
      <Text style={[styles.title,{marginLeft:100,marginBottom:16,fontWeight:'bold',fontSize:26}]}>Login</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter your Email'
      value={email}
      onChangeText={text=>setEmail(text)}
      placeholderTextColor='rgba(0,0,0,0.7)'
      />
      <TextInput
      style={styles.input}
      placeholder='Enter Password'
      value={password}
      onChangeText={text=>setPassword(text)}
      placeholderTextColor='rgba(0,0,0,0.7)'
      />
    
      <TouchableOpacity onPress={handleSubmit} style={styles.submit}><Text >Login</Text></TouchableOpacity>
      <Text onPress={()=>navigation.goBack()} style={{alignSelf:'center',marginTop:17,marginRight:2,color:'black'}}>Create Account ?</Text>
      </View>

    </View>
   
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  submit:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    color:'black',
    fontWeight:'bold',
    fontSize:14,
    borderWidth:0.6,
    height:42,
    width: '90%',
    marginTop:10,
    marginLeft:12
    
 },
 
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    
  },
  
  card: {
    marginTop:'65%',
    paddingLeft:18,
    paddingRight:18,
    paddingBottom:18,
    paddingTop:2,
    height: "60%",
    width: '100%',
    backgroundColor: 'rgba(227, 226, 240, 0.6)',
    borderRadius: 6, 
  },
  input: {
    paddingLeft: 18,
    fontSize: 13,
    fontWeight:'bold',
    borderRadius: 6,
    marginBottom: 16,
    backgroundColor: 'white', 
    opacity:0.7
  },
  title: {
    marginTop:3,
    fontWeight: 'bold',
    fontSize: 23,
    color:'black'
  }

})