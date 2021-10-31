import React from 'react';
import classes from './Card.module.scss';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className={`${classes.Card} ${props.className}`}>
            <img src={props.imgUrl} alt="" />
            <div>
                {props.children}
            </div>
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    imgUrl: PropTypes.string
}

Card.Title = (props) => {
    return (
        <div className={`${classes.title}`}>
            {props.children}
        </div>
    );
}

Card.Title.propTypes = {
    className: PropTypes.string
}

Card.Content = (props) => {
    return (
        <div className={`${classes.content}`}>
            {props.children}
        </div>
    );
}

Card.Content.propTypes = {
    className: PropTypes.string
}

Card.Link = (props) => {
    return (
        <Link to={props.to} className={`${classes.link} btn btn-outline-danger`}>
            {props.children}
        </Link>
    );
}

Card.Link.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string
}

export default Card
