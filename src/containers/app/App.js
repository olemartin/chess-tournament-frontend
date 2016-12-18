import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';

import LoginPopup from '~/components/login-popup';

import config from '~/config';
import * as dispatchers from '~/dispatchers';

class AppContainer extends Component {
    constructor() {
        super();

        this.onLoginRequest = this.onLoginRequest.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onToggleLoginDialog = this.onToggleLoginDialog.bind(this);
    }

    onLoginRequest({ username, password }) {
        this.props.toggleLoginDialog();
        this.props.verifyLoginDetails(username, password);
    }

    onToggleLoginDialog() {
        this.props.toggleSiteDrawer();
        this.props.toggleLoginDialog();
    }

    onLogout() {
        this.props.toggleSiteDrawer();
        this.props.logout();
    }

    render() {
        const {
            children,
            closeSnackbar,
            loggedIn,
            loginDialogOpen,
            siteDrawerOpen,
            snackbar,
            toggleLoginDialog,
            toggleSiteDrawer,
        } = this.props;

        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={toggleSiteDrawer}
                    title={config.siteTitle}
                />
                <Drawer
                    onRequestChange={toggleSiteDrawer}
                    open={siteDrawerOpen}
                    docked={false}
                >
                    {!loggedIn &&
                        <MenuItem onTouchTap={this.onToggleLoginDialog}>
                            Log in
                        </MenuItem>
                    }
                    {loggedIn &&
                        <MenuItem onTouchTap={this.onLogout}>
                            Log out
                        </MenuItem>
                    }
                </Drawer>
                <main>
                    {children}
                </main>
                <LoginPopup
                    onClose={toggleLoginDialog}
                    onLogin={this.onLoginRequest}
                    open={loginDialogOpen}
                />
                <Snackbar
                    open={snackbar.open}
                    message={snackbar.message}
                    autoHideDuration={4000}
                    onRequestClose={closeSnackbar}
                />
            </div>
        );
    }
}

AppContainer.propTypes = {
    children: PropTypes.node.isRequired,
    closeSnackbar: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    loginDialogOpen: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    siteDrawerOpen: PropTypes.bool.isRequired,
    snackbar: PropTypes.shape({
        message: PropTypes.string,
        open: PropTypes.bool,
    }).isRequired,
    toggleLoginDialog: PropTypes.func.isRequired,
    toggleSiteDrawer: PropTypes.func.isRequired,
    verifyLoginDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn,
    loginDialogOpen: state.user.metadata.loginDialogOpen,
    siteDrawerOpen: state.site.drawerOpen,
    snackbar: {
        open: state.site.snackbarOpen,
        message: state.site.snackbarMessage,
    },
});

export default connect(mapStateToProps, dispatchers)(AppContainer);
