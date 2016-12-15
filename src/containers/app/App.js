import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

import config from '~/config';

class AppContainer extends Component {
    constructor() {
        super();
        this.state = {}; // TODO: For eslint yo
    }

    render() {
        return (
            <div>
                <AppBar title={config.siteTitle} />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

AppContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContainer;
