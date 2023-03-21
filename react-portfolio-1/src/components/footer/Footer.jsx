import React from 'react'
import './footer.css';

import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {GrTwitter} from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
      <a href="#header" target="_blank" rel="noreferrer" className='footer_logo'>Ranjeth</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><GrTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ranjeth R</small>
      </div>
    </footer>
  )
}

export default Footer
