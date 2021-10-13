import React, { useRef, useState } from 'react';
import classes from './ContactPage.module.css';

const ContactPage = (props) => {
    document.title = 'Priti Bhunia | Contact';

    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const formData = useState({ name: '', email: '', message: '' });

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value, nameRef.current.value, messageRef.current.value);
    }

    return (
        <div className={`${classes.ContactPage} ani-popIn`}>
            <div className={`${classes.ContactCard} container`}>
                <div className={`${classes.ContactHeader} text-uppercase mb-5`}>Contact</div>
                <div className={classes.StaticText}>Have a question?</div>
                <form className={classes.ContactForm} onSubmit={formSubmitHandler}>

                    {/* <div className={classes.NameEmailInput}> */}
                    <input className="form-control" type='text' name='name' placeholder='Your Name' ref={nameRef} value={formData.name} required/>
                    <input className="form-control" type='email' name='email' placeholder='Your Email' ref={emailRef} value={formData.email} required/>
                    {/* </div> */}
                    <textarea className="form-control" name='message' placeholder='Your Message' ref={messageRef} required>{formData.message}</textarea>
                    <button type='submit' className='btn btn-outline-info'>Send</button>
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
