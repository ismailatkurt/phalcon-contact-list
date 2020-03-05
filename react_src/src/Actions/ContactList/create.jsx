import {CREATE_CONTACT} from "../../Helpers/Constants";

export function create() {
    return {
        type: CREATE_CONTACT,
        redirect: false
    }
}
