import user from './userReducer';
import contacts from './contactReducer';
import activeUserId from './activeUserIdReducer';
import messages from './messageReducer';
import {combineReducers} from 'redux'

export default combineReducers({
    user, contacts,messages, activeUserId
})
