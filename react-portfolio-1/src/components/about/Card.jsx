import React from 'react'

// Icons
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const Card = ({icon, title, text}) => {

    function renderLogin() {
        if (icon === "experience") {
            return <FaAward className='about_icon'/>
        } else if (icon === "client") {
            return <FiUsers className='about_icon'/>
        } else {
            return <VscFolderLibrary className='about_icon'/>
        }
    }       
      
  return (
    <article className='about_card'>
        {renderLogin()}
        <h5>{title}</h5>
        <small>{text}</small>
    </article>
  )
}

export default Card
