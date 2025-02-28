import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = ({ navigate, isComplete, delet, filterTodos }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredTodos = useSelector(state => state.todo.filteredTodos);

  const handleFilter = (type) => {
    setActiveFilter(type);
    filterTodos(type);
  };

  return (
    <View style={styles.todoListContainer}>
      {filteredTodos.length > 0 && (
        <>
          <View style={styles.horizontalDivider} />
          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={[styles.filterBtns, activeFilter === 'all' && styles.activeFilterBtn]}
              onPress={() => handleFilter('all')}
            >
              <Text style={[styles.filterText, activeFilter === 'all' && styles.activefilterText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtns, activeFilter === 'progress' && styles.activeFilterBtn]}
              onPress={() => handleFilter('progress')}
            >
              <Text style={[styles.filterText, activeFilter === 'progress' && styles.activefilterText]}>In progress</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtns, activeFilter === 'done' && styles.activeFilterBtn]}
              onPress={() => handleFilter('done')}
            >
              <Text style={[styles.filterText, activeFilter === 'done' && styles.activefilterText]}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.todoContainer}>
            <FlatList
              data={filteredTodos}
              keyExtractor={(item) => item.id}
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  todoContainer: {
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