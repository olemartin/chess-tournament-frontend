import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import LoginPopup from '~/components/login-popup';

import config from '~/config';
import * as dispatchers from '~/dispatchers';

class AppContainer extends Component {
    constructor() {
        super();

        this.onLoginRequest = this.onLoginRequest.bind(this);
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

    render() {
        const {
            siteDrawerOpen,
            toggleLoginDialog,
            toggleSiteDrawer,
            children,
            loginDialogOpen,
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
                    <h2>Menu</h2>
                    <MenuItem onTouchTap={this.onToggleLoginDialog}>Log in</MenuItem>
                </Drawer>
                <main>
                    {children}
                </main>
                <LoginPopup
                    onClose={toggleLoginDialog}
                    onLogin={this.onLoginRequest}
                    open={loginDialogOpen}
                />
            </div>
        );
    }
}

AppContainer.propTypes = {
    children: PropTypes.node.isRequired,
    loginDialogOpen: PropTypes.bool.isRequired,
    siteDrawerOpen: PropTypes.bool.isRequired,
    toggleLoginDialog: PropTypes.func.isRequired,
    toggleSiteDrawer: PropTypes.func.isRequired,
    verifyLoginDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    loginDialogOpen: state.user.loginDialogOpen,
    siteDrawerOpen: state.site.drawerOpen,
});

export default connect(mapStateToProps, dispatchers)(AppContainer);
