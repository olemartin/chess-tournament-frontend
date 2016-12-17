import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

import LoginPopup from '~/components/login-popup';

import config from '~/config';
import * as dispatchers from '~/dispatchers';

class AppContainer extends Component {
    constructor() {
        super();
        this.state = {}; // TODO: For eslint yo
    }

    onLoginDialogClose() {
        this.props.toggleLoginDialog();
    }

    onLoginRequest({ username, password }) {
        this.props.toggleLoginDialog();
        this.props.verifyLoginDetails(username, password);
    }

    render() {
        return (
            <div>
                <AppBar title={config.siteTitle} />
                <main>
                    {this.props.children}
                </main>
                <LoginPopup open={this.props.loginDialogOpen} />
            </div>
        );
    }
}

AppContainer.propTypes = {
    children: PropTypes.node.isRequired,
    loginDialogOpen: PropTypes.bool.isRequired,
    toggleLoginDialog: PropTypes.func.isRequired,
    verifyLoginDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    loginDialogOpen: state.user.dialogOpen,
});

export default connect(mapStateToProps, dispatchers)(AppContainer);
