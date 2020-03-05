import {LOGIN_SCREEN_DISPLAYED} from "../../Helpers/Constants";

export function loginScreenDisplayed() {
    return {
        type: LOGIN_SCREEN_DISPLAYED,
        redirect: false
    }
}
