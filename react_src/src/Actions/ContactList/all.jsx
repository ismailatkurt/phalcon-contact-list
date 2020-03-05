import {GET_ALL_CONTACTS} from "../../Helpers/Constants";

export function all(page, limit, searchTerm) {
    return {
        type: GET_ALL_CONTACTS,
        page: page,
        limit: limit,
        searchTerm: searchTerm,
        redirect: false
    }
}
