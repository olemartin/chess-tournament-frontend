import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './ContentContainer.less';

function ContentContainer(props) {
    const {
        children,
    } = props;

    return (
        <div
            className={classNames(
                'ContentContainer',
            )}
        >
            {children}
        </div>
    );
}

ContentContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContentContainer;
