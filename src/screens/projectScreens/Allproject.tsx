import { FlatList, KeyboardAvoidingView, StyleSheet, View ,Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import DatabaseContext from '../../appwrite/DatabaseContext'
import ProjectCard from './ProjectCard'
import Projectdetails from '../Projectdetails'
const Allproject = ({navigation}) => {
  const [data, setData] = useState([])
  const { database,} = useContext(DatabaseContext)
  
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await database.getPosts([]);
        setData(response?.documents);
      } catch(error) {
        console.log("fetchdata alldata", error)
      }
    }
    fetchdata();
  }, [data]);
  // console.log(data)
  const renderProjectCard = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('Projectdetails', { 
      title: item.title, 
      technology: item.TechnologyUsed, 
      requirement: item.Requirement,
      uniqueid:item.$id,
      userId:item.userId,
      github:item.github,
      content:item.content,
      
   
    })}>
    <ProjectCard 
    key={item.$id}
      title={item.title}
      technology={item.TechnologyUsed}
      requirement={item.Requirement}

    />
    </Pressable>
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id.toString()}
        renderItem={renderProjectCard}
      />
    </KeyboardAvoidingView>
  );
}

export default Allproject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
