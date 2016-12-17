import * as actions from '~/actions';

const initialState = {
    drawerOpen: false,
};

export default function siteReducer(state = initialState, action) {
    switch (action.type) {
        case actions.TOGGLE_SITE_DRAWER: {
            return {
                ...state,
                drawerOpen: !state.drawerOpen,
            };
        }
        default: {
            return state;
        }
    }
}
