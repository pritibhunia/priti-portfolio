import React from 'react';
import classes from './Features.module.scss';

const Features = (props) => {
    return (
        <div className={`${classes.featureList} ${props.className}`}>
            <div className={`${classes.featureItem} ani-popIn`}>
                {/* <div className={classes.featureBanner}>
                    <i class="bi bi-cloud"></i>
                    <i class="bi bi-laptop"></i>
                </div> */}
                <img src="/images/CICD.png" alt="CI/CD" className={classes.featureBanner} />
                <h2 className={classes.featureTitle}>CI/CD</h2>
                <p className={classes.featureDesc}>
                    Looking at the business side, I feel CI/CD is the best way to automate application deployment with minimal risks of errors and to add new features without a hassle bustle.
                </p>
            </div>
            <div className={`${classes.featureItem} ani-popIn`} style={{ animationDelay: '0.4s' }}>
                <img src="/images/containerization.png" alt="Containerization" className={classes.featureBanner} />
                <h2 className={classes.featureTitle}>Containerization</h2>
                <p className={classes.featureDesc}>
                    I am focusing on developing microservices as it reduces the dependency and increases the code reusability for the future.
                </p>
            </div>
            <div className={`${classes.featureItem} ani-popIn`} style={{ animationDelay: '0.8s' }}>
                <img src="/images/cloudComp.png" alt="Cloud Computing" className={classes.featureBanner} />
                <h2 className={classes.featureTitle}>Cloud Computing</h2>
                <p className={classes.featureDesc}>
                    Cloud computing is the beginning of evolutionary computing, and I love to explore new features as they challenge me at my work.
                </p>
            </div>
        </div>
    )
}

export default Features
