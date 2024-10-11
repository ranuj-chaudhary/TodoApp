import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidV4 } from 'uuid';
import moment from 'moment';
const initialState = {
  todos: [
    {
      id: '1',
      content: 'Advice the redux',
      taskCompleted: true,
      timeStamp: '2024-01-31T15:28:43+05:30',
      urgentTask: false,
      private: false,
      dueDate: '2024-08-31T15:28:43+05:30',
      category: 'task',
    },
    {
      id: '2',
      content: 'Thunk the redux',
      taskCompleted: false,
      timeStamp: '2024-01-31T15:28:43+05:30',
      urgentTask: false,
      private: false,
      dueDate: '2024-06-31T15:28:43+05:30',
      category: 'javascript',
    },
    {
      id: '3',
      content: 'Flux the redux',
      taskCompleted: true,
      timeStamp: '2024-05-31T15:28:43+05:30',
      urgentTask: true,
      isPrivate: false,
      dueDate: '2024-02-31T15:28:43+05:30',
      category: 'react',
    },
    {
      id: '4',
      content: 'Store the redux',
      taskCompleted: true,
      timeStamp: '2024-05-31T15:28:43+05:30',
      urgentTask: true,
      isPrivate: false,
      heading: 'Redux',
      dueDate: '2024-02-25T15:28:43+05:30',
      category: 'javascript',
    },
    {
      id: '5',
      content: 'Action Creators the redux',
      taskCompleted: true,
      timeStamp: '2024-05-31T15:28:43+05:30',
      urgentTask: false,
      isPrivate: false,
      heading: 'Redux',
      dueDate: '2024-02-31T15:28:43+05:30',
      category: 'javascript',
    },
    {
      id: '6',
      content: 'Reducer the redux',
      taskCompleted: true,
      timeStamp: '2024-05-31T15:28:43+05:30',
      urgentTask: false,
      isPrivate: false,
      heading: 'Redux',
      dueDate: '2024-02-31T15:28:43+05:30',
      category: 'javascript',
    },
  ],
  deletedTodos: [],
  error: '',
  sortBy: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      prepare(taskTodo, category) {
        let id = uuidV4();
        const timeStamp = moment().format();
        const listCategory = category.length > 0 ? category : 'task';

        const todo = {
          id,
          content: taskTodo,
          taskCompleted: false,
          timeStamp: timeStamp,
          urgentTask: false,
          isPrivate: false,
          category: listCategory,
          dueDate: '2024-02-31T15:28:43+05:30',
        };
        return {
          payload: todo,
        };
      },
      reducer(state, action) {
        state.todos.push(action.payload);
      },
    },
    deleteTodo: {
      prepare(id) {
        return {
          payload: id,
        };
      },
      reducer(state, action) {
        const deletedTask = state.todos.find(
          (todo) => todo.id === action.payload
        );
        state.todos.filter((todo) => todo.id !== action.payload);
        state.deletedTodos.push(deletedTask);
      },
    },
    updateCompleteStatus: {
      prepare(id, status) {
        return {
          payload: {
            id,
            status,
          },
        };
      },
      reducer(state, action) {
        state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.taskCompleted = action.payload.status;
            return todo;
          } else {
            return todo;
          }
        });
      },
    },
    updateUrgentStatus: {
      prepare(id, status) {
        return {
          payload: { id, status },
        };
      },
      reducer(state, action) {
        state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.urgentTask = !todo.urgentTask;
            return todo;
          } else {
            return todo;
          }
        });
      },
    },
    sortTodo: {
      preparefunction(sortBy) {
        return {
          payload: sortBy,
        };
      },
      reducer(state, action) {
        state.sortBy = action.payload;
      },
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateCompleteStatus,
  updateUrgentStatus,
  sortTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
