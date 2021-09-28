import React, { useRef, useState } from 'react';
import classes from './ContactPage.module.css';

const ContactPage = (props) => {
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const formData = useState({name: '', email: '', message: ''});

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value, nameRef.current.value, messageRef.current.value);
    }

    return (
        <div className={classes.ContactPage}>
            <div className={classes.ContactCard}>
                <form className={classes.ContactForm} onSubmit={formSubmitHandler}>
                    <h3>Contact</h3>
                    <div className={classes.NameEmailInput}>
                        <input className={`form-control`} type='text' name='name' placeholder='Your Name' ref={nameRef} value={formData.name}/>
                        <input className={`form-control`} type='email' name='email' placeholder='Your Email' ref={emailRef} value={formData.email}/>
                    </div>
                    <textarea className={`form-control ${classes.message}`} name='message' placeholder='Your Message' ref={messageRef}>{formData.message}</textarea>
                    <button type='submit' className='btn btn-outline-primary'>Send</button>
                </form>
                <div className={classes.SocialLinks}>
                    <h3 className="mb-4">You can reach me out</h3>
                    <a href="https://www.linkedin.com" rel="noreferrer" className="px-3 px-md-4" target="_blank"><i className="bi bi-linkedin"></i></a>
                    <a href="https://www.facebook.com/" rel="noreferrer" className="px-3 px-md-4" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/" rel="noreferrer" className="px-3 px-md-4" target="_blank"><i className="bi bi-instagram"></i></a>
                    <a href="https://twitter.com" rel="noreferrer" className="px-3 px-md-4" target="_blank"><i className="bi bi-twitter"></i></a>
                    <a href="https://github.com/" rel="noreferrer" className="px-3 px-md-4" target="_blank"><i className="bi bi-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
