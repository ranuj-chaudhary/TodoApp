import { combineReducers, createStore } from 'redux';
import todoReducer from './reducers/reducers';

const rootReducer = combineReducers({
    todo: todoReducer
})

console.log(rootReducer)
export const store = createStore(rootReducer);
