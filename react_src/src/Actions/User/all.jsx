import {GET_ALL_USERS} from "../../Helpers/Constants";

export function all(page, limit, searchTerm) {
    return {
        type: GET_ALL_USERS,
        page: page,
        limit: limit,
        searchTerm: searchTerm,
        redirect: false
    }
}
