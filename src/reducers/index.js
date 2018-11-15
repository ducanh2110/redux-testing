import user from './userReducer';
import contacts from './contactReducer';
import activeUserId from './activeUserIdReducer';
import messages from './messageReducer';
import typing from './typingReducer';
import {combineReducers} from 'redux'

export default combineReducers({
    typing, user, contacts, messages, activeUserId
})
