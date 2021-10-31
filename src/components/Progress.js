import React from 'react';
import PropTypes from 'prop-types';
import classes from './Progress.module.scss';

const Progress = (props) => {
    return (
        <div className={classes.progress}>
            {props.label && <div className={classes.progressLabel}>
                 {props.label}
            </div>}
            <div className={`${classes.progressBar} progress`}>
                <div className="progress-bar" role="progressbar" style={{ width: props.value + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{props.value}%</span></div>
            </div>
        </div>
    )
}

Progress.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number
}

export default Progress
