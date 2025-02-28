import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoInput from '../components/Form';
import TodoList from '../components/TodoList';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, isCompleteAction, deletAction, filterTodosAction, loadTodos, saveTodos } from '../Redux/TodoSlice';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const activeFilter = useSelector(state => state.todo.activeFilter);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  useEffect(() => {
    dispatch(saveTodos(todos));
  }, [todos]);

  useEffect(() => {
    dispatch(filterTodosAction(activeFilter));
  }, [todos, activeFilter]);

  const addTodo = (title, description) => {
    const obj = {
      id: Date.now(),
      title,
      description,
      isDone: false,
    };
    dispatch(addTodoAction(obj));
  };

  const isComplete = (id) => {
    dispatch(isCompleteAction(id));
  };

  const delet = (id) => {
    dispatch(deletAction(id));
  };

  const filterTodos = (type) => {
    dispatch(filterTodosAction(type));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TodoInput addTodo={addTodo} />
        <TodoList
          navigate={navigate}
          isComplete={isComplete}
          delet={delet}
          filterTodos={filterTodos}
        />
      </SafeAreaView>
    </SafeAreaProvider>
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