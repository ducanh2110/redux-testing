import {getMessages} from "../static-data";
import {SEND_MESSAGE} from "../constants/action-types";
import _ from 'lodash';
export default (state = getMessages(10), action) =>  {
    switch (action.type) {
        case SEND_MESSAGE:
            const {message, userId} = action.payload;
            const userCurrentMessage = state[userId];
            const number =+_.findLastKey(userCurrentMessage ) + 2;
            return {...state, [userId]: {
                    ...userCurrentMessage,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }};
        default:
            return state;
    }
}
