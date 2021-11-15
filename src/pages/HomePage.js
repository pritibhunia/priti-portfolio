import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../assets/data/HomePage.data.json';
import TypingContent from '../components/TypingContent';
import classes from './HomePage.module.css';

const HomePage = () => {
    document.title = 'Priti Bhunia';
    return (
        <div className={`${classes.HomePage} d-flex flex-column`}>
            <div className="row flex-grow-1 align-items-center">
                <div className={classes.bgImage} style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bgImage.jpeg'})` }}></div>
                <div className={`${classes.banner} col-lg-6 col-md-12`}>
                    <img className={`${classes.bannerImg} ani-popIn`} src="/images/bannerImg.jpeg" alt="Banner" />
                </div>
                <div className={`${classes.content}  col-lg-6 col-md-12`}>
                    <h1 className={classes.greet}>Hello!!!</h1>
                    <h1 className={classes.title}>I am <span className={classes.name}>{data.name}</span></h1>
                    <TypingContent className={classes.subtitle} data={data.subtitle}></TypingContent>
                    <div className={classes.description}>{data.description}</div>
                </div>
            </div>
            <div className={`${classes.actionBtn} flex-shrink-0 py-5 w-100 text-end px-5`}>
                <NavLink className="btn btn-outline-info" to="/contact">Get in touch</NavLink>
            </div>
        </div>
    )
}

export default HomePage
