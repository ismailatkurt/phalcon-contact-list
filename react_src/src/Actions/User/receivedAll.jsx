import {RECEIVED_ALL_USERS} from "../../Helpers/Constants";

export function receivedAll(users, totalPageCount) {
    return {
        type: RECEIVED_ALL_USERS,
        users: users,
        totalPageCount: totalPageCount,
        redirect: false
    }
}
