import React from 'react';
import PropTypes from 'prop-types';
import classes from './Section.module.scss';

const Section = (props) => {
    return (
        <section className={`${classes.section} ${props.className}`}>
            {props.title && <div className={`${classes.sectionHeader} text-uppercase`}>
                {props.title}
            </div>}
            <div className={classes.sectionBody}>
                {props.children}
            </div>
        </section>
    )
}

Section.propTypes = {
    className : PropTypes.string,
    title : PropTypes.string
}

export default Section
