import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from '../reducers/reducers';
import newTodoReducer from '../features/todos/components/todoSlice';
import userReducer from '../features/profile/components/userSlice';
import customListReducer from '../features/custom-list/components/customListSlice';

export const store = configureStore({
  reducer: {
    customList: customListReducer,
    user: userReducer,
    todo: newTodoReducer,
  },
});
