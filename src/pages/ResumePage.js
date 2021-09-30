import React from 'react';
import classes from './ResumePage.module.css';

const ResumePage = (props) => {
    return (
        <div className={classes.ResumePage} id="ResumePage">
            <iframe src="https://pritibhunia.github.io/cv/" frameBorder="0" title="resume"></iframe>
        </div>
    )
}

export default ResumePage
