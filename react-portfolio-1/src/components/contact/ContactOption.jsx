import React from 'react'

import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const ContactOption = ({type, name, url}) => {

  function check() {
    if (type === "Email") {
        return <MdOutlineEmail className='contact_option-icon'/>
    } else if (type === "Messenger") {
        return <RiMessengerLine className='contact_option-icon'/>
    }
    else {
        return <BsWhatsapp className='contact_option-icon'/>
    }
  }
    
  return (
    <article className='contact_option'>
        {check()}
        <h4>{type}</h4>
        <h5>{name}</h5>
        <a href={url} target="_blank" rel="noreferrer">Send a message</a>
    </article>
  )
}

export default ContactOption
