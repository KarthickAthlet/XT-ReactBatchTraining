import {combineReducers} from 'redux';
import filterIssues from './reducers';

const rootReducer = combineReducers({
    filterIssues
});

export default rootReducer;