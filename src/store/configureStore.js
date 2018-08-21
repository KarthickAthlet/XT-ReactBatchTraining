import { createStore } from 'redux';
import filterIssues from '../reducers/reducers'

const store = createStore(filterIssues);

export default store;