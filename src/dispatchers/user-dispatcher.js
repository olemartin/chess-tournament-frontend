import * as actions from '~/actions';
import * as server from '~/api/server';

export function toggleLoginDialog() {
    return dispatch => dispatch(actions.loginDialogToggled());
}

export function verifyLoginDetails(username, password) {
    return (dispatch) => {
        const authString = btoa(`${username}:${password}`);
        dispatch(actions.loginRequested(authString));

        server.verifyLogin(authString)
            .then((user) => {
                dispatch(actions.loginSucceeded(user));
                dispatch(actions.loginDialogToggled());
                dispatch(actions.showSnackbarMessage('Logged in!'));
            })
            .catch(() => {
                dispatch(actions.loginFailed());
                dispatch(actions.showSnackbarMessage('Nope!'));
            });
    };
}

export function logout() {
    return (dispatch) => {
        dispatch(actions.logout());
        dispatch(actions.showSnackbarMessage('Logged out.'));
    };
}
