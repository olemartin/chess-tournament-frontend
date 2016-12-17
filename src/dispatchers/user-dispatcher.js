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
            .then(user => dispatch(actions.loginSucceeded(user)))
            .catch(() => dispatch(actions.loginFailed()));
    };
}
