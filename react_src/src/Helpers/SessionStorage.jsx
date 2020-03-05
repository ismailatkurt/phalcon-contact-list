export default class SessionStorage {
    static setUserData(token, username) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('username', username);
    }

    static clearUserData() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
    }

    static getToken() {
        return sessionStorage.getItem('token');
    }

    static getUsername() {
        return sessionStorage.getItem('username');
    }
}