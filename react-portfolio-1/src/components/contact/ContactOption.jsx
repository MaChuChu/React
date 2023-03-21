import React from 'react'

import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const ContactOption = ({type, name, url}) => {

  function check() {
    if (type === "Email") {
        <MdOutlineEmail />
    } else if (type === "") {
        <RiMessengerLine />
    }
    else {
        <BsWhatsapp />
    }
  }
    
  return (
    <article className='contact_option'>
        {check()}
        <h4>Email</h4>
        <h5>ranjeth1965@gmail.com</h5>
        <a href="mailto:ranjeth1965@gmail.com">Send a message</a>
    </article>
  )
}

export default ContactOption
