import * as actions from '~/actions';

const initialState = {
    authString: '',
    loggedIn: false,
    loginDialogOpen: false,
    metadata: {
        pending: false,
    },
    name: '',
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_REQUESTED: {
            return {
                ...state,
                authString: action.authString,
                metadata: { pending: true },
            };
        }
        case actions.LOGIN_SUCCEEDED: {
            return {
                ...state,
                loggedIn: true,
                metadata: { pending: false },
                name: action.name,
            };
        }
        case actions.LOGIN_FAILED: {
            return {
                ...state,
                loggedIn: false,
                metadata: { pending: false },
                name: '',
            };
        }
        default: {
            return state;
        }
    }
}
