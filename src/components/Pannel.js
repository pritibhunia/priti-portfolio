import React from 'react'
import classes from './Pannel.module.scss';
import PropTypes from 'prop-types';

const Pannel = (props) => {
    let animationClass = 'ani-slideIn-left';
    if (props.reverse) {
        animationClass = classes.reverse + ' ani-slideIn-right';
    }
    return (
        <>
            <div className={`${classes.pannel} ${props.className} ${animationClass}`}>
                {props.children}
            </div>
        </>
    )
}

Pannel.propTypes = {
    className: PropTypes.string,
    reverse: PropTypes.bool
}


Pannel.Header = (props) => {
    return (
        <div className={`${classes.pannelHeader} ${props.className}`}>
            {props.children}
        </div>
    )
}

Pannel.Header.propTypes = {
    className: PropTypes.string
}

Pannel.Content = (props) => {
    return (
        <div className={`${classes.pannelContent} ${props.className}`}>
            {props.children}
        </div>
    )
}

Pannel.Content.propTypes = {
    className: PropTypes.string
}

export default Pannel
