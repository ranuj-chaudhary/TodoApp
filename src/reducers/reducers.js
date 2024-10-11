import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';
import { SunIcon, StarLineIcon, HomeIcon } from '../icons/icons';

// ACTION TYPES

const actiontypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  ERROR: '',
  TASK_COMPLETED: 'TASK_COMPLETED',
  SORT_TODO: 'SORT_TODO',
  URGENT_TASK: 'URGENT_TASK',
  ADD_CUSTOMLIST: 'ADD_CUSTOMLIST',
  DELETE_CUSTOMLIST: 'DELETE_CUSTOMLIST',
};

const initialState = {
  userId: '123455',
  username: 'Ranuj Choudhary',
  password: 'password',
  is_admin: false,
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
  category: ['grocery', 'office work', 'personal work'],
  error: '',
  sortBy: '',
  defaultList: [
    {
      name: 'My day',
      icon: <SunIcon className="text-blue-300" />,
      url: 'myday',
      id: '1',
      listKey: 'TotalTodayTask',
    },
    {
      name: 'Important',
      icon: <StarLineIcon className="text-pink-500" />,
      url: 'important',
      id: '2',
      listKey: 'Important',
    },
    {
      name: 'Task',
      icon: <HomeIcon className="text-pink-500" />,
      url: 'tasks',
      id: '4',
      listKey: 'TotalTask',
    },
  ],
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
};

// REDUCER
function todoReducer(state = initialState, action) {
  switch (action.type) {
   case actiontypes.ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
  

    case actiontypes.ADD_CUSTOMLIST:
      return {
        ...state,
        customList: [...state.customList, action.payload],
      };
    case actiontypes.DELETE_CUSTOMLIST:
      return {
        ...state,
        customList: [
          ...state.customList.filter((list) => list.id !== action.payload.id),
        ],
        todos: [
          ...state.todos.filter(
            (list) => list.category !== action.payload.name
          ),
        ],
      };
    default:
      return {
        ...state,
      };
  }
}



export const deleteTodo = function (id) {
  return {
    type: actiontypes.DELETE_TODO,
    payload: { id },
  };
};

export const errorMessage = function (erroMessage) {
  return {
    type: actiontypes.ERROR,
    payload: { error: erroMessage },
  };
};



// // ACTION CREATORS SORTBY



export const addCustomList = function (list) {
   return {
    type: actiontypes.ADD_CUSTOMLIST,
    payload: list,
  };
};
export const deleteCustomList = function (id, listName) {
  return {
    type: actiontypes.DELETE_CUSTOMLIST,
    payload: { id, listName },
  };
};

export default todoReducer;
