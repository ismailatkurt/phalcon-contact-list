import {SAVE_USER} from "../../Helpers/Constants";

export function save(user) {
    return {
        type: SAVE_USER,
        user: user,
        redirect: false
    }
}
