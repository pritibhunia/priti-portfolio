import PropTypes from 'prop-types';
import React from 'react';
import AppNavigation from './AppNavigation';
import classes from './PageLayout.module.css';

const PageLayout = (props) => {

    return (
        <div className={`${classes.app} ${props.className}`}>
            {/* <div className={classes.bgImage}></div> */}
            {/* <img className={classes.bgImage} src={bgImage} alt="Background"/> */}
            <header id="app-header" className={`${classes.appHeader} ${classes.stickyHeader}`}> 
                <AppNavigation></AppNavigation>
            </header>
            <main className={`${classes.appBody} container`}>
                {props.children}
            </main>
            <footer className={classes.appFooter}>

            </footer>
        </div>
    )
}

PageLayout.propTypes = {
    className: PropTypes.string
}

export default PageLayout
