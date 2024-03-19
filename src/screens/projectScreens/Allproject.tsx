import { FlatList, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import DatabaseContext from '../../appwrite/DatabaseContext'
import ProjectCard from './ProjectCard'

const Allproject = () => {
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
  }, []);
   console.log(data)
  const renderProjectCard = ({ item ,index}) => (
    <ProjectCard
    key={index}
      title={item.title}
      technology={item.TechnologyUsed}
      requirement={item.Requirement}
      featureimage={item.featureimage}
    />
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderProjectCard}
        keyExtractor={(item, index) => index.toString()}
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
