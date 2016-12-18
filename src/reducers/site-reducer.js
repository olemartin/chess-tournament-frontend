import * as actions from '~/actions';

const initialState = {
    drawerOpen: false,
    snackbarOpen: false,
    snackbarMessage: '',
};

export default function siteReducer(state = initialState, action) {
    switch (action.type) {
        case actions.TOGGLE_SITE_DRAWER: {
            return {
                ...state,
                drawerOpen: !state.drawerOpen,
            };
        }
        case actions.SHOW_SNACKBAR_MESSAGE: {
            return {
                ...state,
                snackbarOpen: true,
                snackbarMessage: action.message,
            };
        }
        case actions.CLOSE_SNACKBAR: {
            return {
                ...state,
                snackbarOpen: false,
                snackbarMessage: '',
            };
        }
        default: {
            return state;
        }
    }
}
