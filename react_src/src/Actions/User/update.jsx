import {UPDATE_USER} from "../../Helpers/Constants";

export function update(id, user) {
    return {
        type: UPDATE_USER,
        id: id,
        user: user,
        redirect: false
    }
}
