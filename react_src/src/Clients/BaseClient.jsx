import SessionStorage from "../Helpers/SessionStorage";
import {NotificationManager} from "react-notifications";

export default class BaseClient {
    handleError(res) {
        if (typeof res.response !== 'undefined') {
            if (res.response.status === 401) {
                SessionStorage.clearUserData();
                window.location.replace('/app#/');
                NotificationManager.warning('Your session is expired!');
            }
            if (typeof res.response.data.error !== 'undefined') {
                if (typeof res.response.data.error !== 'string') {
                    for (let errorParameter in res.response.data.error) {
                        let singleError = res.response.data.error[errorParameter];
                        for (let errorKey in singleError) {
                            NotificationManager.error(errorParameter + ' : ' + singleError[errorKey]);
                        }
                    }
                } else {
                    NotificationManager.error(res.response.data.error);
                }
            } else if (typeof res.response.data !== "undefined") {
                if (typeof res.response.data.message !== "undefined" && typeof res.response.data.message === 'string') {
                    NotificationManager.error(res.response.data.message);
                } else {
                    for (let errorParameter in res.response.data) {
                        let singleError = res.response.data[errorParameter];
                        for (let errorKey in singleError) {
                            NotificationManager.error(errorParameter + ' : ' + singleError[errorKey]);
                        }
                    }
                }
            }
        }
    }
}