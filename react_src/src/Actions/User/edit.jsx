import {EDIT_USER} from "../../Helpers/Constants";

export function edit(id) {
    return {
        type: EDIT_USER,
        id: id,
        redirect: false
    }
}
