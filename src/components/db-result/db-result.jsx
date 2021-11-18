import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import dbresultIcon from './icon--db-result.svg';
import styles from './db-result.css';

const DbResultComponent = function (props) {
    const {
        active,
        className,
        onClick,
        title,
        ...componentProps
    } = props;
    return (
        <img
            className={classNames(
                className,
                styles.dbresult,
                {
                    [styles.isActive]: active
                }
            )}
            draggable={false}
            src={dbresultIcon}
            title={title}
            onClick={onClick}
            {...componentProps}
        />
    );
};
DbResultComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
DbResultComponent.defaultProps = {
    active: false,
    title: 'Db'
};
export default DbResultComponent;
