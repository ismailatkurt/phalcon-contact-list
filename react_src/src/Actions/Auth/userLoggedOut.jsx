import {USER_LOGGED_OUT} from "../../Helpers/Constants";

export function userLoggedOut() {
    return {
        type: USER_LOGGED_OUT,
        redirect: false
    }
}
