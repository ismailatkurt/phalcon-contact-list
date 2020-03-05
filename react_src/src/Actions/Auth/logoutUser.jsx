import {LOGOUT_USER} from "../../Helpers/Constants";

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        redirect: false
    }
}
