import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from '~/containers/app';

const theme = getMuiTheme({
    // TODO: Set up colors etc.
    // http://www.material-ui.com/#/customization/themes
});

const RootContainer = props => (
    <MuiThemeProvider muiTheme={theme}>
        <App>
            {props.children}
        </App>
    </MuiThemeProvider>
);

RootContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RootContainer;
