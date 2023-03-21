import React from 'react';
import './contact.css';

import ContactOptions from './ContactOptions';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <ContactOptions />
        <form action="">

        </form>
      </div>
    </section>
  )
}

export default Contact
