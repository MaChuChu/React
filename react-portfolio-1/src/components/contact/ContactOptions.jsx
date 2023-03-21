import React from 'react'

import ContactOption from './ContactOption';

const ContactOptions = () => {
  return (
    <div className="contact_options">
        <ContactOption type="Email" name="ranjeth1965@gmail.com" url="mailto:ranjeth1965@gmail.com"/>
        <ContactOption type="Messenger" name="Ranjeth Ravichandran" url="https://m.meernest.achiever"/>
        <ContactOption type="WhatsApp" name="+447399123602" url="https://api.whatsapp.com/send?phone=+447399123602"/>
    </div>
  )
}

export default ContactOptions
