import React, { useState } from 'react';
import AppNavigation from './AppNavigation';
import classes from './PageLayout.module.css';
import PropTypes from 'prop-types'

const PageLayout = (props) => {
    const [stickyHeader, setStickyHeader] = useState(false);

    
    window.addEventListener('scroll', () => {
        const headerHeight = document.getElementById('app-header').clientHeight + 10;
        
        if(window.pageYOffset > headerHeight) {
            setStickyHeader(true);
        } else {
            setStickyHeader(false);
        }
    });

    return (
        <div className={`${classes.app} ${props.className}`}>
            {/* <div className={classes.bgImage}></div> */}
            {/* <img className={classes.bgImage} src={bgImage} alt="Background"/> */}
            <header id="app-header" className={`${classes.appHeader} ${stickyHeader ? classes.stickyHeader : ''}`}> 
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
