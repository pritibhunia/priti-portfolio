import React from 'react';
import classes from './ResumePage.module.css'

const ResumePage = (props) => {
    return (
        <div className={classes.ResumePage}>
            <iframe src="https://pritibhunia.github.io/cv/" frameborder="0" title="resume"></iframe>
        </div>
    )
}

export default ResumePage
