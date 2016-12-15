import React, { PropTypes } from 'react';

import './CenteredWrapper.less';

const CenteredWrapper = (props) => {
    const {
        children,
    } = props;

    return (
        <div className="CenteredWrapper">
            {children}
        </div>
    );
};

CenteredWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CenteredWrapper;
