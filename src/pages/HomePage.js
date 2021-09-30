import React from 'react';
import { NavLink } from 'react-router-dom'
import data from '../assets/data/HomePage.data.json';
import bannerImg from '../assets/images/bannerImg.jpeg';
import TypingContent from '../components/TypingContent';
import classes from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={`${classes.HomePage} row`}>
            <div className={classes.bgImage}></div>
            <div className={`${classes.banner} col-lg-6 col-md-12`}>
                <img className={`${classes.bannerImg} ani-popIn`} src={bannerImg} alt="Banner" />
            </div>
            <div className={`${classes.content}  col-lg-6 col-md-12`}>
                <h1 className={classes.greet}>Hello!!!</h1>
                <h1 className={classes.title}>I am <span className={classes.name}>{data.name}</span></h1>
                <TypingContent className={classes.subtitle} data={data.subtitle}></TypingContent>
                <div className={classes.description}>{data.description}</div>
                <div className={classes.actionBtn}>
                    <NavLink className="btn btn-outline-info mt-5" to="/contact">Get in touch</NavLink>
                </div>
            </div>
        </div>
    )
}

export default HomePage
