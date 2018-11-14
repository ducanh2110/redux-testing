import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {
    tech: ' using Redux'
};
export const store = createStore(reducer, initialState);
