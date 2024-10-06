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
      id: '4',
      listKey: 'TotalTask',
    },
  ],
  error: '',
};

// REDUCER
function userReducer(state = initialState, action) {
  switch (action.type) {
    case actiontypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    default:
      return {
        ...state,
      };
  }
}

// ACTION CREATORS TODO
const updateUser = () => {
    return 'user'
}
export default userReducer;
