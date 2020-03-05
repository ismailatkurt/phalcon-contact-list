import {RECEIVED_ALL_CONTACTS} from "../../Helpers/Constants";

export function receivedAll(contacts, totalPageCount) {
    return {
        type: RECEIVED_ALL_CONTACTS,
        contacts: contacts,
        totalPageCount: totalPageCount,
        redirect: false
    }
}
