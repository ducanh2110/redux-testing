import {contacts} from "../static-data";

export default (state = contacts, action) => {
    switch (action.type) {
        case "SET_TECHNOLOGY": {
            console.log(action);
            return {
                ...state,
                tech: action.tech
            }
        }
        default: return state;
    }
}
