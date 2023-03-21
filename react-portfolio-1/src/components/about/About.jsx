import React from 'react'
import './about.css';

import ME from '../../assets/me-about.jpg';

// Scrollbar
import { Link } from "react-scroll";

import Cards from './Cards';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about_content">
          <Cards />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At doloribus aliquam corporis atque sapiente, dolorum sit harum fugiat est sequi laborum! Quis quam delectus voluptas itaque dolore animi alias architecto.</p>
          <Link
              className='btn btn-primary'
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
