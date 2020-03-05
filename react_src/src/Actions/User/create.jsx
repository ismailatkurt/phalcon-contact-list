import {CREATE_USER} from "../../Helpers/Constants";

export function create() {
    return {
        type: CREATE_USER,
        redirect: false
    }
}
