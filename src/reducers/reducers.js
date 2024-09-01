import uniqid from 'uniqid';
import moment from 'moment/moment';

// ACTION TYPES

const actiontypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  ERROR: '',
  TASK_COMPLETED: 'TASK_COMPLETED',
};

const initialState = {
  userId: '123455',
  username: 'Ranuj Choudhary',
  password: 'password',
  todos: [
    {
      id: '1',
      content: 'Revise the redux',
      taskCompleted: true,
      timeStamp: '2024-08-31T15:28:43+05:30',
      urgentTask: false,
      private: false,
      heading: 'Redux',
    },
    {
      id: '2',
      content: 'Revise the redux',
      taskCompleted: true,
      timeStamp: '2024-08-31T15:28:43+05:30',
      urgentTask: false,
      isPrivate: false,
      heading: 'Redux',
    },
    {
      id: '3',
      content: 'Revise the redux',
      taskCompleted: false,
      timeStamp: '2024-08-31T15:28:43+05:30',
      urgentTask: false,
      private: false,
      heading: 'Redux',
    },
  ],
  deletedTodos: [],
  category: ['grocery', 'office work', 'personal work'],
  error: '',
  is_admin: false,
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

    default:
      return {
        ...state,
      };
  }
}

// ACTION CREATORS
export const addTodo = function addTodo(task) {
  const { taskTodo, heading } = task;

  let id = uniqid();
  const timeStamp = moment().format();

  const todo = {
    id,
    content: taskTodo,
    taskCompleted: false,
    timeStamp: timeStamp,
    urgentTask: false,
    isPrivate: false,
    heading,
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

export default todoReducer;
