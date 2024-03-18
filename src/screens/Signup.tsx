import React, { useState, useContext } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import AppwriteContext from '../appwrite/AppwriteContext';

const Signup = ({ navigation }) => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);

  const validateEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = () => {
    if (
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      repeatPassword.length < 1
    ) {
      setError('All fields are required');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long');
    } else if (password !== repeatPassword) {
      setError('Passwords do not match');
    } else {
      const user = {
        email,
        password,
        name,
      };
      appwrite.createAccount(user).then((response) => {
        if (response) {
          setIsLoggedIn(true);
          Snackbar.show({
            text: 'Signup success',
            duration: Snackbar.LENGTH_LONG,
          });
        }
      });
    }

    if (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <ScrollView style={{ backgroundColor:'#B7C9F2',
    height:'100%'}}>

          <View style={styles.container}>
            <View style={styles.card}>
              <Text style={[styles.title, {alignSelf:'center', marginBottom: 16 }]}>Get a Account !</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => {
                  setError('');
                  setName(text);
                }}
                placeholder='Name'
                placeholderTextColor='rgba(0,0,0,0.7)'
              />
              <TextInput
                style={styles.input}
                placeholder='Enter your Email'
                value={email}
                onChangeText={(text) => {
                  setError('');
                  setEmail(text);
                }}
                placeholderTextColor='rgba(0,0,0,0.7)'
              />
              <TextInput
                secureTextEntry
                style={styles.input}
                placeholder='Enter Password'
                value={password}
                onChangeText={(text) => {
                  setError('');
                  setPassword(text);
                }}
                placeholderTextColor='rgba(0,0,0,0.7)'
              />
              <TextInput
                secureTextEntry
                style={styles.input}
                value={repeatPassword}
                onChangeText={(text) => setRepeatPassword(text)}
                placeholder='Re-enter Password'
                placeholderTextColor='rgba(0,0,0,0.7)'
              />
              <TouchableOpacity onPress={handleSubmit} style={styles.submit}><Text>Sign Up</Text></TouchableOpacity>

              <Text onPress={()=>navigation.navigate('Login')} style={{marginTop:14,alignSelf:'center',color:'black'}}> Login To Account ?</Text>
             
            </View>
            
          </View>
      
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 0.6,
    height: 42,
    width: '90%',
    marginLeft:15,
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  card: {
    marginTop: "55%",
    paddingLeft: 18,
    paddingRight: 18,
    height: "70%",
    width: '100%',
    backgroundColor: 'rgba(227, 226, 240, 0.6)',
    borderRadius: 6,
  },
  input: {
    paddingLeft: 18,
    fontSize: 13,
    fontWeight: 'bold',
    borderRadius: 6,
    marginBottom: 12,
    backgroundColor: 'white', 
    opacity: 0.7
  },
  title: {
    marginTop:3,
    fontWeight: 'bold',
    fontSize: 20,
    color:'black'
  }
});


