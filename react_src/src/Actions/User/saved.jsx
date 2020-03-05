import {USER_SAVED} from "../../Helpers/Constants";

export function saved() {
    return {
        type: USER_SAVED,
        redirect: '/app/users'
    }
}
