import * as actions from '~/actions';

export function toggleSiteDrawer() {
    return dispatch => dispatch(actions.toggleSiteDrawer());
}

export function closeSnackbar() {
    return dispatch => dispatch(actions.closeSnackbar());
}
