import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './SectionWrapper.less';

function SectionWrapper(props) {
    const {
        children,
    } = props;

    return (
        <div
            className={classNames(
                'SectionWrapper',
            )}
        >
            {children}
        </div>
    );
}

SectionWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SectionWrapper;
