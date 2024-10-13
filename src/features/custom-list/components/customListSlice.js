import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidV4 } from 'uuid';
const initialState = {
  customList: [
    {
      name: 'javascript',
      url: 'customlist',
      id: '1232',
    },
    {
      name: 'react',
      url: 'customlist',
      id: '12',
    },
  ],
  error: '',
};

const customListSlice = createSlice({
  name: 'customList',
  initialState: initialState,
  reducers: {
    addCustomList: {
      prepare(listName) {
        if (listName.length === 0) {
          listName = 'untitled list';
        }

        const newList = {
          name: listName.toLowerCase(),
          url: 'customlist',
          id: uuidV4(),
        };

        return {
          payload: newList,
        };
      },
      reducer(state, action) {
        state.customList.push(action.payload);
      },
    },
    deleteCustomList: {
      prepare(id) {
        return {
          payload: id,
        };
      },
      reducer(state, action) {
        const listIndex = state.customList.findIndex((list) => list.id === action.payload);
        if (listIndex === -1) return;
        state.customList.splice(listIndex, 1);
      },
    },
  },
});

export const { addCustomList, deleteCustomList } = customListSlice.actions;
export default customListSlice.reducer;
