import {
    CREATE_USER,
    EDIT_USER,
    GET_ALL_USERS,
    RECEIVED_ALL_USERS,
    RECEIVED_USER_FOR_EDIT,
    SAVE_USER,
    UPDATE_USER,
    USER_SAVED,
    USER_UPDATED
} from "../Helpers/Constants";
import UserClient from "../Clients/UserClient";

const initialState = {
    users: []
};

export default function UserReducer(state = initialState, action) {
    let userClient = new UserClient();

    switch (action.type) {
        case GET_ALL_USERS:
            userClient.all(action.page, action.limit, action.searchTerm);
            return Object.assign({}, initialState, state);
        case RECEIVED_ALL_USERS:
            return Object.assign({}, state, action);
        case EDIT_USER:
            userClient.edit(action.id);
            return Object.assign({}, state);
        case UPDATE_USER:
            userClient.update(action.id, action.user);
            return Object.assign({}, state);
        case USER_UPDATED:
            return Object.assign({}, state, action);
        case RECEIVED_USER_FOR_EDIT:
            return Object.assign({}, state, action);
        case SAVE_USER:
            userClient.save(action.user);
            return Object.assign({}, state);
        case USER_SAVED:
            return Object.assign({}, state, action);
        case CREATE_USER:
            return Object.assign({}, state, action);
        default:
            return Object.assign({}, state);
    }
}
