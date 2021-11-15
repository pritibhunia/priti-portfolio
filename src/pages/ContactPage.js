import React, { useState } from 'react';
import GrowlMessage from '../components/GrowlMessage';
import classes from './ContactPage.module.css';

const ContactPage = (props) => {
    document.title = 'Priti Bhunia | Contact';
    const FORM_STATE = { INIT: 1, SUBMITTED: 2, SUCCESS: 3, FAILED: 4 };
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(FORM_STATE.INIT);

    const updateData = (event) => {
        const field = event.target.name;
        const val = event.target.value;
        setFormData(prevState => ({ ...prevState, [field]: val }));
    }

    const validateForm = () => {
        return false;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setFormStatus(FORM_STATE.SUBMITTED);
        if (validateForm) {
            postMessage();
        }
    }

    const postMessage = () => {
        fetch('https://portfolio-31d91-default-rtdb.firebaseio.com/messages.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            console.log(res);
            if (res.ok) {
                setFormStatus(FORM_STATE.SUCCESS);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormStatus(FORM_STATE.FAILED);
            }
        }).catch((reason) => {
            console.log(reason);
            setFormStatus(FORM_STATE.FAILED);
            console.error(reason);
        })
    }

    const growlCloseHandler = (event) => {
        setFormStatus(FORM_STATE.INIT);
    }

    return (
        <div className={`${classes.ContactPage} ani-popIn`}>
            <div className={`${classes.ContactCard} container`}>
                <div className={`${classes.ContactHeader} text-uppercase mb-5`}>Contact</div>
                <div className={classes.StaticText}>Have a question?</div>
                <form className={classes.ContactForm} onSubmit={formSubmitHandler}>
                    <input className="form-control" type='text' name='name' placeholder='Your Name' value={formData.name} autoComplete="off" onChange={updateData} required/>
                    <input className="form-control" type='email' name='email' placeholder='Your Email' value={formData.email} autoComplete="off" onChange={updateData} required/>
                    <textarea className="form-control" name='message' placeholder='Your Message' onChange={updateData} value={formData.message} required></textarea>
                    <button type='submit' className='btn btn-outline-info' disabled={formStatus === FORM_STATE.SUBMITTED}>Send</button>
                    {formStatus === FORM_STATE.SUCCESS && <GrowlMessage type='success' onClose={growlCloseHandler}>The message has been posted successfully.</GrowlMessage>}
                    {formStatus === FORM_STATE.FAILED && <GrowlMessage type='error' onClose={growlCloseHandler}>Error occured while posting the message. Please try again later.</GrowlMessage>}
                </form>
                <div className={classes.SocialLinks}>
                    <h3 className="mb-4 text-uppercase">You can reach me out</h3>
                    <div className="d-flex flex-row justify-content-around container">
                        <a href="https://www.linkedin.com/in/pritibhunia" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/bhuniapriti" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://pritibhunia.medium.com" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-globe"></i>
                        </a>
                        <a href="https://twitter.com/pritibhunia" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://github.com/pritibhunia" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
