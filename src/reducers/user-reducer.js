import * as actions from '~/actions';

const initialState = {
    authString: '',
    loggedIn: false,
    metadata: {
        loginDialogOpen: false,
        pending: false,
    },
    name: '',
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_DIALOG_TOGGLED: {
            return {
                ...state,
                metadata: {
                    ...state.metadata,
                    loginDialogOpen: !state.metadata.loginDialogOpen,
                },
            };
        }
        case actions.LOGIN_REQUESTED: {
            return {
                ...state,
                authString: action.authString,
                metadata: {
                    ...state.metadata,
                    pending: true,
                },
            };
        }
        case actions.LOGIN_SUCCEEDED: {
            return {
                ...state,
                loggedIn: true,
                metadata: { ...state.metadata, pending: false },
                name: action.user.name,
            };
        }
        case actions.LOGIN_FAILED: {
            return {
                ...state,
                loggedIn: false,
                metadata: {
                    ...state.metadata,
                    pending: false,
                },
                name: '',
            };
        }
        case actions.LOGOUT: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
