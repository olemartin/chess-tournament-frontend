export const TOGGLE_SITE_DRAWER = 'TOGGLE_SITE_DRAWER';
export const toggleSiteDrawer = () => ({
    type: TOGGLE_SITE_DRAWER,
});

export const SHOW_SNACKBAR_MESSAGE = 'SHOW_SNACKBAR_MESSAGE';
export const showSnackbarMessage = message => ({
    message,
    type: SHOW_SNACKBAR_MESSAGE,
});

export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const closeSnackbar = () => ({
    type: CLOSE_SNACKBAR,
});
