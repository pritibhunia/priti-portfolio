import React from 'react';
import PropTypes from 'prop-types'
import Progress from './Progress';
import classes from './SkillSet.module.scss';

const SkillSet = (props) => {
    return (

        <div className={`${classes.skillSetSection} ${props.className}`}>
            {/* CI/CD, Containerization, Cloud Computing */}
            {/* 
                    - CI/CD
                    - High Scalebility, No underlying infrastructure required
                    - Flexibility, mobility, Cost Saving and Sustainability
                */}
            <div className={classes.skillDesc}>
                <h1 className='ani-slideIn-up mb-5' >ABOUT ME</h1>
                <h5 className='ani-slideIn-up mb-4' style={{ animationDelay: '0.4s', color: '#74cacf' }}>
                    SENIOR ENGINEER - DESIGN & DEVELOPMENT, SIEMENS HEALTHINEERS
                </h5>
                <p className='ani-slideIn-up' style={{ animationDelay: '0.8s'}}>
                    I am a software developer currently working on developing a digital imaging healthcare platform product using cutting-edge technologies like Edge Computing, Cloud Computing, and Containerization technology. As far as the tech stack is concerned, ASP.NET 5.0, C#, YAML, and Shell Scripting have been used for development.
                </p>
                {/* <p className='ani-slideIn-up' style={{ animationDelay: '1.2s' }}>
                    Developing a digital imaging platform product using edge computing, cloud computing, containerization with ASP.NET 5.0, C#, YAML and Shell Scripting
                </p> */}
            </div>
            <div className={classes.skillSet}>
                <Progress label="CSS3" value={90}></Progress>
                <Progress label="HTML" value={90}></Progress>
                <Progress label="JavaScript" value={70}></Progress>
                <Progress label="ReactJs" value={70}></Progress>
                <Progress label="C#" value={75}></Progress>
                <Progress label="PowerShell" value={85}></Progress>
                <Progress label="Python" value={70}></Progress>
                <Progress label="Java" value={50}></Progress>
                <Progress label="SQL" value={70}></Progress>
                <Progress label="Azure" value={80}></Progress>
                <Progress label="DevOps" value={80}></Progress>
            </div>
        </div>
    )
}

SkillSet.propTypes = {
    className: PropTypes.string
}

export default SkillSet
