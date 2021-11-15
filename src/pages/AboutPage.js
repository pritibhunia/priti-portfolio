import React from 'react';
import Features from '../components/Features';
import Section from '../components/Section';
import SkillSet from '../components/SkillSet';
import classes from './AboutPage.module.scss';

const AboutPage = (props) => {
    document.title = 'Priti Bhunia | About Me';
    // CSS, HTML, JavaScript, Python, Power Shell, SQL, Azure, DevOps
    return (
        <Section className={`${classes.AboutPage} container mt-5`}>
            {/* <Achievements></Achievements> */}
            <Features className='mt-3'></Features>
            <SkillSet></SkillSet>
        </Section>
    )
}

export default AboutPage;