import React, { useRef } from 'react';

import emailjs from 'emailjs-com';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ws9ue0h', 'template_9y8ht5m', form.current, 'fR_iLzMA2Utc0tY9I')

        e.target.reset();
    };

    return (
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Full Name' required/>
        <input type="text" name='email'placeholder='Email' required/>
        <textarea name="message" rows="7" placeholder='Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    )
}

export default ContactForm
