import {createStore} from 'redux';
import combineReducers from '../reducers';
// import {contacts} from '../static-data'

const store = createStore(combineReducers);
export default store;
