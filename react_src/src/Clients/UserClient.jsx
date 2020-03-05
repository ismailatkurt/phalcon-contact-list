import store from "../store.jsx";
import axios from 'axios';
import BaseClient from "./BaseClient";
import {receivedAll} from "../Actions/User/receivedAll";
import SessionStorage from "../Helpers/SessionStorage";
import {receivedForEdit} from "../Actions/User/receivedForEdit";
import {saved} from "../Actions/User/saved";
import {updated} from "../Actions/User/updated";

export default class UserClient extends BaseClient {
    constructor() {
        super();
        this.baseUrl = window.apiUrl + 'users';
    }

    all = (page, limit, searchTerm) => {
        const url = this.baseUrl + '?page=' + page + '&limit=' + limit + '&searchTerm=' + searchTerm;
        return axios.get(url, {
            headers: {
                token: SessionStorage.getToken(),
                username: SessionStorage.getUsername(),
            }
        })
            .then(res => {
                store.dispatch(receivedAll(res.data.items, res.data.totalPageCount))
            })
            .catch(res => {
                this.handleError(res);
            });
    };

    edit = (id) => {
        const url = this.baseUrl + '/' + id + '/edit';

        return axios.get(url, {
            headers: {
                token: SessionStorage.getToken(),
                username: SessionStorage.getUsername(),
            }
        })
            .then(res => {
                store.dispatch(receivedForEdit(res.data))
            })
            .catch(res => {
                this.handleError(res);
            });
    };

    save = (data) => {
        const url = this.baseUrl;

        return axios.post(url, data, {
            headers: {
                token: SessionStorage.getToken(),
                username: SessionStorage.getUsername(),
            }
        })
            .then(res => {
                store.dispatch(saved())
            })
            .catch(res => {
                this.handleError(res);
            });
    };

    update = (id, data) => {
        const url = this.baseUrl + '/' + id;

        return axios.put(url, data, {
            headers: {
                token: SessionStorage.getToken(),
                username: SessionStorage.getUsername(),
            }
        })
            .then(res => {
                store.dispatch(updated())
            })
            .catch(res => {
                this.handleError(res);
            });
    };
}
