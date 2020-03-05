import {SAVE_CONTACT} from "../../Helpers/Constants";

export function save(contact) {
    return {
        type: SAVE_CONTACT,
        contact: contact,
        redirect: false
    }
}
