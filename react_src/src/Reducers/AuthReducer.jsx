import {LOGIN_SCREEN_DISPLAYED, LOGIN_USER, LOGOUT_USER, USER_LOGGED_IN, USER_LOGGED_OUT} from "../Helpers/Constants";
import Auth from "../Clients/Auth";
import SessionStorage from "../Helpers/SessionStorage";

const initialState = {
    username: '',
    password: '',
    token: ''
};

export default function AuthReducer(state, action) {
    let authClient = new Auth();

    switch (action.type) {
        case LOGIN_USER:
            authClient.loginUser(action.username, action.password);
            return Object.assign({}, initialState, state);
        case USER_LOGGED_IN:
            SessionStorage.setUserData(action.token, action.username);
            return Object.assign({}, state, action);
        case LOGOUT_USER:
            authClient.logoutUser();
            return Object.assign({}, state, action);
        case USER_LOGGED_OUT:
            return Object.assign({}, state, action);
        case LOGIN_SCREEN_DISPLAYED:
            return Object.assign({}, state, action);
        default:
            return Object.assign({}, initialState, state);
    }
}
