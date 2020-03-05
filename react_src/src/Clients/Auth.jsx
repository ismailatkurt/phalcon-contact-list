import store from "../store.jsx";
import {userLoggedIn} from "../Actions/Auth/userLoggedIn";
import axios from 'axios';
import SessionStorage from "../Helpers/SessionStorage";
import BaseClient from "./BaseClient";

export default class Auth extends BaseClient {
    constructor() {
        super();
        this.baseUrl = window.apiUrl + 'auth';
    }

    loginUser = (username, password) => {
        const url = this.baseUrl + '/login';
        let user = {
            username: username,
            password: password
        };
        return axios.post(url, user)
            .then(res => {
                store.dispatch(userLoggedIn(res.data))
            })
            .catch(res => {
                this.handleError(res);
            });
    };

    logoutUser = () => {
        SessionStorage.clearUserData();
        window.location.replace('/app#/');
    };
}
