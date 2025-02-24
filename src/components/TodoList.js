import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, filteredTodos, navigate, isComplete, delet, filterTodos }) => {
  return (
    <View style={styles.todoListContainer}>
      {todos.length > 0 && (
        <>
          <View style={styles.horizontalDivider} />
          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={[styles.filterBtns, styles.activeFilterBtn]}
              onPress={() => filterTodos('all')}
            >
              <Text style={[styles.filterText, styles.activefilterText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterBtns}
              onPress={() => filterTodos('progress')}
            >
              <Text style={styles.filterText}>In progress</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterBtns}
              onPress={() => filterTodos('done')}
            >
              <Text style={styles.filterText}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.todoContainer}>
            <FlatList
              data={filteredTodos}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  navigate={navigate}
                  isComplete={isComplete}
                  delet={delet}
                />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    width: '90%',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 10,
  },
  todoContainer:{
    width: '90%',
    marginTop: 10,
  },
  horizontalDivider: {
    height: 1,
    width: '90%',
    marginVertical: 15,
    backgroundColor: 'lightgray',
  },
  filterContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  filterBtns: {
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
  },
  filterText: {
    color: 'black',
    fontSize: 15,
  },
  activeFilterBtn: {
    backgroundColor: 'black',
  },
  activefilterText: {
    color: 'white',
  },
});

export default TodoList;