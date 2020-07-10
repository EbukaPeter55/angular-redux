import {ITodo} from './todo';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

export function rootReducer(state, action){
 // The reducer handles the action type which has been dispatched here in the store
  switch (action.type){
    case ADD_TODO:
      action.todo.id = state.todos.length + 1;
      return Object.assign({}, state, {
        todos: state.todos.concat(Object.assign({}, action.todo)),
        lastUpdate: new Date()
      })

    case TOGGLE_TODO:
    let todo = state.todos.find(t => t.id === action.id);
    let index = state.todos.indexOf(todo);
    return Object.assign({}, state, {
      todos: [
        ...state.todos.slice(0, index),
        Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
        ...state.todos.slice(index+1)
      ],
      lastUpdate: new Date()
    });
    case REMOVE_TODO:

    case REMOVE_ALL_TODOS:
  }
  return state;
}
