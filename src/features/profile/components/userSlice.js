import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '123455',
  username: 'Ranuj Choudhary',
  password: 'password',
  is_admin: false,
  defaultList: [
    {
      name: 'My day',
      url: 'myday',
      id: '1',
      listKey: 'TotalTodayTask',
    },
    {
      name: 'Important',
      url: 'important',
      id: '2',
      listKey: 'Important',
    },
    {
      name: 'Task',
      url: 'tasks',
      id: '3',
      listKey: 'TotalTask',
    }
  ],
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: {
      prepare(user) {
        return {
          payload: user,
        };
      },
      reducer(state, action) {
        state.user = {
          ...state.user,
          ...action.payload,
        };
      },
    },
  },
});

export const {getUser} = userSlice.actions;
export default userSlice.reducer;
