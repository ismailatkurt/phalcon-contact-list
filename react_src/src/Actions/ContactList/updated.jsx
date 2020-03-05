import {CONTACT_UPDATED} from "../../Helpers/Constants";

export function updated() {
    return {
        type: CONTACT_UPDATED,
        redirect: '/app/contacts'
    }
}
