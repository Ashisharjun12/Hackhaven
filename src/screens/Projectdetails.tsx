// route screen is inside the AppStack
import {ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
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
      const uniqueId=productdetails.uniqueid
      const title="hi"
    const handleinroll=()=>{
        const updata={
        uniqueId,
        title,
            
        }
        console.log(productdetails.uniqueId)
            database.updatePost(updata)
           setUserinfodiv(!userinfodiv)
    }


  return (
     <ScrollView>
        <View style={styles.container}>
            <View style={styles.productdetail}>
                <View style={styles.tittle}><Text style={{fontSize:22,fontWeight:'bold',color:'black',lineHeight:28}}>{productdetails.title}</Text></View>
                <View style={styles.content}><Text style={{fontSize:20,lineHeight:24,fontWeight:'400',color:'black'}}>{productdetails.content}</Text></View>
                <Text style={{fontSize:16,color:'black',marginLeft:'5%' ,marginBottom:'2%',marginTop:'2%'}}>Technology Used</Text>
           
           <View style={[styles.within,{marginTop:2}]}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {Technologyparts.map((part, index) => (
               <View key={index} style={styles.textContainer}>
          <Text style={{color:'black'}} >{part}</Text>
           </View>
            ))}
            </ScrollView>
             </View>
             <Text style={{fontSize:16,color:'black',marginLeft:'5%',marginBottom:'2%',marginTop:'2%'}}>Requirement</Text>
           <View style={[styles.within,{marginTop:2}]}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {Requirementparts.map((part, index) => (
               <View key={index} style={styles.textContainer}>
          <Text style={{color:'black'}} >{part}</Text>
           </View>
            ))}
        
            </ScrollView>
             </View>
            <Text style={{fontSize:16,marginTop:12,marginLeft:18}}>Enroll and get GitHub and social media links</Text>
            <TouchableOpacity style={styles.github} onPress={handleinroll}><Text>ENROLL</Text></TouchableOpacity>
           {/**/}
           { userinfodiv && 
           <View style={{flexGrow:1,height:'auto',width:'100%'}}>
            <Text>{productdetails.github}</Text></View>}
            </View>
        </View>

     </ScrollView>
  )
}

export default Projectdetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding:12,
    // paddingBottom: 1,
    // justifyContent: 'flex-start',
  },
  productdetail:{
    flexGrow:1,  
    height:'auto',
    width:'100%',
    padding:11,
    borderRadius:16,
    backgroundColor:'white'
},
tittle:{
    flexGrow:1,
    height: 'auto',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
},
content:{
    marginTop:'2%',
},
within:{
    height:42,
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
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

github:{
    height:42,
    width:144,
    marginTop:10,
    marginLeft:'30%',
    borderRadius:22,
    borderWidth:2,
    borderColor:'blue',
    backgroundColor:'white',
    justifyContent:"center",
    alignItems:'center'
},
});