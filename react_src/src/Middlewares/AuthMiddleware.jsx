import SessionStorage from "../Helpers/SessionStorage";
import {LOGIN_USER, LOGOUT_USER, USER_LOGGED_IN, USER_LOGGED_OUT} from "../Helpers/Constants";
import {logoutUser} from "../Actions/Auth/logoutUser";

export const AuthMiddleware = store => next => action => {
    let token = SessionStorage.getToken();
    if (action.type !== LOGIN_USER &&
        action.type !== USER_LOGGED_IN &&
        action.type !== USER_LOGGED_OUT &&
        action.type !== LOGOUT_USER &&
        (token === null || token === '' || token === "undefined")) {
        store.dispatch(logoutUser())
    } else {
        next(action);
    }
};
