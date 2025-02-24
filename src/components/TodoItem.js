import React from 'react';
import { Pressable, Text, View, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const TodoItem = ({ item, navigate, isComplete, delet }) => {
  return (
    
    <Pressable style={styles.todoItems} onPress={() => navigate('TodoDetails', item)}>
      <Text style={{ textDecorationLine: item.isDone ? 'line-through' : 'none' }}>
        {item.title}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {!item.isDone ? (
          Platform.OS === 'ios' ? (
            <Ionicons
              name="checkmark-done"
              size={24}
              color="green"
              onPress={() => isComplete(item.id)}
            />
          ) : (
            <Ionicons
              name="checkmark-done-circle"
              size={24}
              color="green"
              onPress={() => isComplete(item.id)}
            />
          )
        ) : (
          <MaterialCommunityIcons
            name="progress-check"
            size={24}
            color="black"
            onPress={() => isComplete(item.id)}
          />
        )}
        <AntDesign
          name="delete"
          size={20}
          color="red"
          onPress={() => delet(item.id)}
        />
      </View>
    </Pressable>
  );
};

const styles = {
  todoItems: {
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 10,
    width: '100%',
    height: 50,
    padding: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '1.2em',
  },
};

export default TodoItem;