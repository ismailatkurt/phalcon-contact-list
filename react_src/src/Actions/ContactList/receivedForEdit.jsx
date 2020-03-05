import {RECEIVED_CONTACT_FOR_EDIT} from "../../Helpers/Constants";

export function receivedForEdit(contact) {
    return {
        type: RECEIVED_CONTACT_FOR_EDIT,
        contact: contact,
        redirect: false
    }
}
