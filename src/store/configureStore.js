import { createStore } from 'redux';
import rootReducer from '../reducers/index';


const store = createStore(rootReducer);

console.log(store.getState());
debugger;
export default store;