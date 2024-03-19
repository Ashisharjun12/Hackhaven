import {  ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ProjectCard = ({title,technology,requirement}) => {
    const Technologyparts = technology.split(',').map(part => part.trim());
    const Requirementparts = requirement.split(',').map(part => part.trim());
    return (
    
<ScrollView style={{backgroundColor:'rgba(220,224,238,0.5)'}}>
  <View style={styles.container}>
     <View style={styles.Card}>
       <View style={styles.Headerdiv}>
         <Text numberOfLines={1} ellipsizeMode="tail" style={styles.headerText}>{title}</Text>
           </View>
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
           <View style={[styles.within,{marginBottom:6}]}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {Requirementparts.map((part, index) => (
               <View key={index} style={styles.textContainer}>
          <Text style={{color:'black'}} >{part}</Text>
           </View>
            ))}
        
            </ScrollView>
        </View>
     </View>
 </View>
    </ScrollView>
  )
}

export default ProjectCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:14,
        paddingBottom:1,
        justifyContent: 'flex-start',
    },
    Card:{
        elevation:5,
        shadowColor:'black',
        height:'100%',
        borderRadius:17,
        borderWidth:1,
        borderColor:'white',
        padding:10,
        width:'100%',
        backgroundColor:'white'
    },
    Headerdiv:{
        height:"17%",
        width:'100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    }, 
    within:{
        height:"20%",
        width:'100%',
        alignItems:'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap', 
        overflow: 'hidden', 
        
    },
    textContainer:{
        marginHorizontal: 5,
        marginTop:5, 
        padding:5,
        paddingLeft:15,
        paddingRight:15,
        borderRadius: 15,
        backgroundColor: 'rgba(220,224,238,1)',    
    },
    headerText:{
        
        justifyContent:'space-between',
        marginLeft:"4%",
       fontSize:17,
       color:'black',
        fontWeight:'500',
       alignItems:'flex-start'
      
    }

})