import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { Pressable } from 'react-native';
import { FlatList,SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View  , Platform} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import {AsyncStorage} from 'react-native';


const HomeScreen = () => {
    const {navigate , dispatch} = useNavigation();

    const [todos , setTodos]=useState([
        {
          id:1,
          title:'first item'
        },
        {
          id:2,
          title:'second item'
        },
      ]);
  return (
   <ScrollView>
         <SafeAreaView style={styles.container}>
      
      <Text style={styles.header}>todo app</Text>
      <TextInput style={styles.input} placeholder='Enter title'/>
      <TextInput style={styles.input} placeholder='Enter description'/>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
   <View style={styles.horizontalDivider}/>
   <View style={styles.filterContainer}>
   <TouchableOpacity style={[styles.filterBtns , styles.activeFilterBtn]}>
        <Text style={[styles.filterText , styles.activefilterText]}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtns}>
        <Text style={styles.filterText}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtns}>
        <Text style={styles.filterText}>Done</Text>
      </TouchableOpacity>
   </View>
    
      <View style={styles.todoListContainer}>
      <FlatList data={todos} keyExtractor={(item)=>item.id} renderItem={({item}) =>(
        <Pressable style={styles.todoItems} onPress={()=> navigate("TodoDetails" , item)}>
        <Text>{item.title}</Text>
        
        {Platform.OS === 'ios' ? (
      <Ionicons name="checkmark-done" size={24} color="red" />
      ) : (
        <Ionicons name="checkmark-done-circle" size={24} color="black" />
      )}
        <AntDesign name="delete" size={20} color="red" />
        </Pressable>
      )}/>
      </View>
   </SafeAreaView>
       </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems:'center'
    },
    header: {
      fontSize: 20,
      textTransform: 'uppercase',
      color: 'red'
  
  
    },
    input:{
      borderColor:"lightgray",
      borderRadius:5,
      borderWidth:1,
      marginVertical:15,
      width:"90%",
      height:40,
      padding:7,
      
    },
    submitBtn:{
      width:"40%",
      height:50,
      alignItems:'center',
      backgroundColor:"black",
      padding:7,
      borderRadius:10,
    },
    text:{
      color:"white",
      paddingVertical:10,
      fontSize:15,
    },
    horizontalDivider:{
      height:1,
      width:"90%",
      marginVertical:15,
      backgroundColor:"lightgray"
    },
    filterContainer:{
     flexDirection:'row',
     width:"90%",
     justifyContent:'space-between'
    },
    filterBtns:{
      width:"30%",
      height:50,
      alignItems:'center',
    
      justifyContent:'center',
      borderRadius:15,
      backgroundColor:"transparent",
      borderColor:"black",
      borderWidth:1
    },
    filterText:{
      color:"Black",
      fontSize:15,
    },
    activeFilterBtn:{
      backgroundColor:"black",
      width:"30%",
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:15,
      borderColor:"black",
      borderWidth:1
    },
    activefilterText:{
      color:"white",
      fontSize:15,
    },
    todoListContainer:{
     width:"90%",
    justifyContent:'center',
     marginTop:10,
    },
    todoItems:{
      borderColor:"Black",
      borderRadius:15,
      borderWidth:1,
      marginVertical:10,
      width:"100%",
      height:40,
      padding:7,
      display:'flex',
      flexDirection:'row',
    justifyContent:'space-between',
      
  
    }
  
  });
  

export default HomeScreen