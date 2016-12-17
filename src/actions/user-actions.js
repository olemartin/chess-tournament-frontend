export const LOGIN_DIALOG_TOGGLED = 'LOGIN_DIALOG_TOGGLED';
export const loginDialogToggled = () => ({
    type: LOGIN_DIALOG_TOGGLED,
});

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const loginRequested = authString => ({
    authString,
    type: LOGIN_REQUESTED,
});

export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const loginSucceeded = user => ({
    type: LOGIN_SUCCEEDED,
    user,
});

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailed = () => ({
    type: LOGIN_FAILED,
});
