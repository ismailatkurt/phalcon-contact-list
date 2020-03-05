import {UPDATE_CONTACT} from "../../Helpers/Constants";

export function update(id, contact) {
    return {
        type: UPDATE_CONTACT,
        id: id,
        contact: contact,
        redirect: false
    }
}
