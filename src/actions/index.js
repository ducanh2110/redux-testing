import {SET_ACTIVE_USER_ID} from "../constants/action-types";

export const setTechnology = (tech) => {
    return {
        type: "SET_TECHNOLOGY",
        tech
    }
}

export const setActiveUserId = (userId) => {
    return {
        type: SET_ACTIVE_USER_ID,
        payload: userId
    }
}
