import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadTodos = createAsyncThunk('todos/loadTodos', async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load todos:', e);
    return [];
  }
});

export const saveTodos = createAsyncThunk('todos/saveTodos', async (todos) => {
  try {
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem('todos', jsonValue);
  } catch (e) {
    console.error('Failed to save todos:', e);
  }
});

const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filteredTodos: [],
    activeFilter: 'all',
  },
  reducers: {
    addTodoAction: (state, action) => {
      if (action.payload && action.payload.title && action.payload.description) {
        state.todos = [...state.todos, action.payload];
        state.filteredTodos = [...state.todos];
      }
    },
    isCompleteAction: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
      state.filteredTodos = [...state.todos];
    },
    deletAction: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      state.filteredTodos = [...state.todos];
    },
    filterTodosAction: (state, action) => {
      state.activeFilter = action.payload;
      if (action.payload === 'done') {
        state.filteredTodos = state.todos.filter((item) => item.isDone === true);
      } else if (action.payload === 'progress') {
        state.filteredTodos = state.todos.filter((item) => item.isDone === false);
      } else if (action.payload === 'all') {
        state.filteredTodos = [...state.todos];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.filteredTodos = [...state.todos];
    });
  },
});

export const { addTodoAction, isCompleteAction, deletAction, filterTodosAction } = TodoSlice.actions;
export default TodoSlice;