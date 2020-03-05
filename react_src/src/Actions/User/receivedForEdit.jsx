import {RECEIVED_USER_FOR_EDIT} from "../../Helpers/Constants";

export function receivedForEdit(user) {
    return {
        type: RECEIVED_USER_FOR_EDIT,
        user: user,
        redirect: false
    }
}
