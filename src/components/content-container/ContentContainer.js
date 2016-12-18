import React, { PropTypes } from 'react';
import classNames from 'classnames';

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
