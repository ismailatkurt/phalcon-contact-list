import {EDIT_CONTACT} from "../../Helpers/Constants";

export function edit(id) {
    return {
        type: EDIT_CONTACT,
        id: id,
        redirect: false
    }
}
