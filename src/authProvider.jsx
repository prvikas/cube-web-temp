import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username } = params;
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const status  = params.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        const { resource } = params;
        if (resource === 'posts') {
            // check credentials for the posts resource
        }
        if (resource === 'comments') {
            // check credentials for the comments resource
        }
        
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject({ redirectTo: '/no-access' });
        
    }
    return Promise.reject('Unkown method');
};