import {CONTACT_SAVED} from "../../Helpers/Constants";

export function saved() {
    return {
        type: CONTACT_SAVED,
        redirect: '/app/contacts'
    }
}
