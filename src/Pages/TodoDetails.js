import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
const TodoDetails = () => {

  const { params } = useRoute();
  useEffect(() => {

  }, [params])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.todoItems}>
      
        <Text>title: <Text>{params.title}</Text></Text>
        
     
        <Text> description:  <Text>{params.description}</Text></Text>
       
    
      <AntDesign name="edit" size={24} color="black" />
      </View>
    </SafeAreaView>
  )
}

const styles = {
  container:{
    backgroundColor: '#fff',
    flex:1,
   
   
  },
  todoItems: {
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 10,
    width: '90%',
    height: 50,
    padding: 7,
    flexDirection: 'row', 
    fontSize: '1.8em',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
   
  
  },
};
export default TodoDetails