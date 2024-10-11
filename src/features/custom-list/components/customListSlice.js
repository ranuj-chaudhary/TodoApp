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
        let id = uuidV4();
        if (listName.length === 0) {
          listName = 'untitled list';
        }

        const newList = {
          name: listName.toLowerCase(),
          url: 'customlist',
          id,
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
          payload: id
        }
      },
      reducer(state, action) {
        state.customList.filter((list) => list.id !== action.payload.id);
      },
    },
  },
});

export const { addCustomList, deleteCustomList } = customListSlice.actions;
export default customListSlice.reducer;
