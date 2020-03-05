import {USER_LOGGED_IN} from "../../Helpers/Constants";

export function userLoggedIn(data) {
    return {
        type: USER_LOGGED_IN,
        token: data.token,
        username: data.username,
        email: data.email,
        image: data.image
    }
}
