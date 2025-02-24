import React, { useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

const TodoInput = ({ addTodo }) => {
  const titleRef = useRef();
  const descRef = useRef();

  return (
    <View style={styles.viewContainer}>
     <Text style={styles.header}>todo app</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        ref={titleRef}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        ref={descRef}
      />
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => {
          if (titleRef.current.value.trim() !== '' && descRef.current.value.trim() !== '') {
            addTodo(titleRef.current.value, descRef.current.value);
            titleRef.current.value = '';
            descRef.current.value = '';
          }
        }}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    viewContainer:{
        width: '90%',
        justifyContent: 'center',
        alignItems:'center',
        
    },
  header: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'red',
  },
  input: {
    borderColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 15,
    width: '90%',
    height: 40,
    padding: 7,
  },
  submitBtn: {
    width: '40%',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 7,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 15,
  },
});

export default TodoInput;