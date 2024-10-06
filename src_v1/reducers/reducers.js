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
  is_admin: false,
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
    case actiontypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    case actiontypes.DELETE_TODO:
      const deletedTask = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        deletedTodos: [...state.deletedTodos, deletedTask],
      };
    case actiontypes.ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case actiontypes.TASK_COMPLETED:
      const updatedTodos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            taskCompleted: action.payload.status,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        todos: [...updatedTodos],
      };
    case actiontypes.URGENT_TASK:
      const updatedUrgentTask = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          const changeStatus = item.urgentTask;
          return {
            ...item,
            urgentTask: !changeStatus,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        todos: [...updatedUrgentTask],
      };
    case actiontypes.SORT_TODO:
      return {
        ...state,
        sortBy: action.payload.sortBy,
      };
    case actiontypes.ADD_CUSTOMLIST:
      return {
        ...state,
        customList: [...state.customList, action.payload.list],
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

// ACTION CREATORS TODO
export const addTodo = function addTodo(taskTodo, category) {
  let id = uuidv4();
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
    type: actiontypes.ADD_TODO,
    payload: { todo },
  };
};

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

export const completeTask = function (id, status) {
  return {
    type: actiontypes.TASK_COMPLETED,
    payload: { id, status },
  };
};

export const updateUrgentTask = function (id) {
  return {
    type: actiontypes.URGENT_TASK,
    payload: { id },
  };
};

// // ACTION CREATORS SORTBY

export const sortTodo = function (sortBy) {
  return {
    type: actiontypes.SORT_TODO,
    payload: { sortBy },
  };
};

export const addCustomList = function (listName) {
  let id = uuidv4();
  if (listName.length === 0) {
    listName = 'untitled list';
  }

  const newList = {
    name: listName.toLowerCase(),
    url: 'customlist',
    id,
  };
  return {
    type: actiontypes.ADD_CUSTOMLIST,
    payload: { list: newList },
  };
};
export const deleteCustomList = function (id, listName) {
  return {
    type: actiontypes.DELETE_CUSTOMLIST,
    payload: { id, listName },
  };
};

export default todoReducer;
