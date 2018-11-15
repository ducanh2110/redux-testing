import {SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE} from "../constants/action-types";

export const setActiveUserId = (userId) => {
    return {
        type: SET_ACTIVE_USER_ID,
        payload: userId
    }
}
export const setTypingValue = (typing) => {
    return {
        type: SET_TYPING_VALUE,
        payload: typing
    }
}
export const sendMessage = (message, userId) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            message, userId
        }
    }
}
