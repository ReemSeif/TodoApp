// import { useNavigation, useRoute } from '@react-navigation/native';
// import React, { useRef, useState } from 'react'
// import { Pressable } from 'react-native';
// import { FlatList,SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View  , Platform} from 'react-native';
// import AntDesign from '@expo/vector-icons/AntDesign';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Form from '../components/Form'
// import {AsyncStorage} from 'react-native';


// const HomeScreen = () => {
//     const {navigate , dispatch} = useNavigation();
//    let isDone;

//     const [todos , setTodos]=useState([]);
//     const[filteredTodos , setFilteredTodos]=useState([]);
//       const addTodo =()=>{
      
//          const obj={
//           id:Date.now(),
//           title,
//           description,
//           isDone:false
//           }
//           const allTodos=[...todos,obj];
//           setTodos(allTodos);
//           setFilteredTodos(allTodos);
          
//         }
      
      
//       const isComplete=(id)=>{
//        const newTodo = todos.map((todo) => todo.id == id ? {...todo , isDone: !todo.isDone} : todo);
//        setTodos(newTodo);
//        setFilteredTodos(newTodo);
       

//       }
//       const delet=(id)=>{
//           const deletedTodo= [...todos];
//           setTodos(deletedTodo.filter((item)=> item.id !== id ))
//           setFilteredTodos(deletedTodo)
          
//       }
//       const filterTodos=(type)=>{
//         const filteredTodos = [...todos]
//         if(type =="done"){
//           setFilteredTodos(filteredTodos.filter((item)=> item.isDone == true))
//         }
//         else if(type == 'progress'){
//           setFilteredTodos(filteredTodos.filter((item)=> item.isDone == false))
//         }
//         else {
//           setFilteredTodos(filteredTodos)
//         }

//       }
//   return (
   
//          <SafeAreaView style={styles.container}>
      
//       <Text style={styles.header}>todo app</Text>
//      <Form addTodo={addTodo}/>
//       <View style={styles.todoListContainer}>
//       <Text>
      
//       { todos.length >0 && (
//          <>
         
//           <View style={styles.horizontalDivider}/>
//        <View style={styles.filterContainer}>
//        <TouchableOpacity style={[styles.filterBtns , styles.activeFilterBtn]} onPress={()=>filterTodos('all')}>
//             <Text style={[styles.filterText , styles.activefilterText]}>All</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={[styles.filterBtns ,styles.activeFilterBtn]} onPress={()=>filterTodos('progress')}>
//             <Text style={[styles.filterText , styles.activefilterText]}>In progress</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={[styles.filterBtns,styles.activeFilterBtn]} onPress={()=>filterTodos('done')}>
//             <Text style={[styles.filterText , styles.activefilterText]}>Done</Text>
//           </TouchableOpacity>
//        </View>
    
//           <View style={styles.todoListContainer}>
//           <FlatList data={filteredTodos} keyExtractor={(item)=>item.id} renderItem={({item}) =>(
//             <Pressable style={styles.todoItems} onPress={()=> navigate("TodoDetails" , item)}>
//             <Text style={{textDecorationLine: item.isDone ? 'line-through' : 'none' }}>{item.title}</Text>
//             <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//               {
//                 !item.isDone ? (Platform.OS === 'ios' ? (
//                   <Ionicons name="checkmark-done" size={24} color="green" onPress={()=>isComplete(item.id)} />
//                   ) : (
//                     <Ionicons name="checkmark-done-circle" size={24} color="green" onPress={()=>isComplete(item.id)} />
//                   )) 
//                   : (
// <MaterialCommunityIcons name="progress-check" size={24} color="black" onPress={()=>isComplete(item.id)} />
//                   ) 
//               }
           
//             <AntDesign name="delete" size={20} color="red" onPress={()=>delet(item.id)} />
//             </View>
           
//             </Pressable>
//           )}/>
//           </View>
//           </>
//         )
//       }
//       </Text>
//       </View>
    
     
     
     
     
  
//    </SafeAreaView>
      
//   )
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       justifyContent: 'center',
//       alignItems:'center'
//     },
//     header: {
//       fontSize: 20,
//       textTransform: 'uppercase',
//       color: 'red'
  
  
//     },
//     input:{
//       borderColor:"lightgray",
//       borderRadius:5,
//       borderWidth:1,
//       marginVertical:15,
//       width:"90%",
//       height:40,
//       padding:7,
      
//     },
//     submitBtn:{
//       width:"40%",
//       height:50,
//       alignItems:'center',
//       backgroundColor:"black",
//       padding:7,
//       borderRadius:10,
//     },
//     text:{
//       color:"white",
//       paddingVertical:10,
//       fontSize:15,
//     },
//     horizontalDivider:{
//       height:1,
//       width:"90%",
//       marginVertical:15,
//       backgroundColor:"lightgray"
//     },
//     filterContainer:{
//      flexDirection:'row',
//      width:"90%",
//      justifyContent:'space-between'
//     },
//     filterBtns:{
//       width:"30%",
//       height:50,
//       alignItems:'center',
    
//       justifyContent:'center',
//       borderRadius:15,
//       backgroundColor:"transparent",
//       borderColor:"black",
//       borderWidth:1
//     },
//     filterText:{
//       color:"Black",
//       fontSize:15,
//     },
//     activeFilterBtn:{
//       backgroundColor:"black",
//       width:"30%",
//       height:50,
//       alignItems:'center',
//       justifyContent:'center',
//       borderRadius:15,
//       borderColor:"black",
//       borderWidth:1
//     },
//     activefilterText:{
//       color:"white",
//       fontSize:15,
//     },
//     todoListContainer:{
//      width:"90%",
//     justifyContent:'center',
//      marginTop:10,
//     },
//     todoItems:{
//       borderColor:"Black",
//       borderRadius:15,
//       borderWidth:1,
//       marginVertical:10,
//       width:"100%",
//       height:50,
//       padding:7,
//       display:'flex',
//       flexDirection:'row',
//     justifyContent:'space-between',
//     fontSize:'1.2em'
      
  
//     }
  
//   });
  

// export default HomeScreen


import React, { useState ,useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoInput from '../components/Form';
import TodoList from '../components/TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  // Save todos to AsyncStorage whenever the todos state changes
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const saveTodos = async (todos) => {
    try {
      const jsonValue = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', jsonValue);
    } catch (e) {
      console.error('Failed to save todos:', e);
    }
  };

  const loadTodos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todos');
      if (jsonValue !== null) {
        const loadedTodos = JSON.parse(jsonValue);
        setTodos(loadedTodos);
        setFilteredTodos(loadedTodos);
      }
    } catch (e) {
      console.error('Failed to load todos:', e);
    }
  };

  const addTodo = (title, description) => {
    const obj = {
      id: Date.now(),
      title,
      description,
      isDone: false,
    };
    const allTodos = [...todos, obj];
    setTodos(allTodos);
    setFilteredTodos(allTodos);
  };

  const isComplete = (id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodo);
    setFilteredTodos(newTodo);
  };

  const delet = (id) => {
    const deletedTodo = todos.filter((item) => item.id !== id);
    setTodos(deletedTodo);
    setFilteredTodos(deletedTodo);
  };

  const filterTodos = (type) => {
    if (type === 'done') {
      setFilteredTodos(todos.filter((item) => item.isDone === true));
    } else if (type === 'progress') {
      setFilteredTodos(todos.filter((item) => item.isDone === false));
    } else {
      setFilteredTodos(todos);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        navigate={navigate}
        isComplete={isComplete}
        delet={delet}
        filterTodos={filterTodos}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default HomeScreen;