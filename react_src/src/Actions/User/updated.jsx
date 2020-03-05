import {USER_UPDATED} from "../../Helpers/Constants";

export function updated() {
    return {
        type: USER_UPDATED,
        redirect: '/app/users'
    }
}
