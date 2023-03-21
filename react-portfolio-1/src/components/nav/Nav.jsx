import React from 'react';
import './nav.css';

// Icons
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

// Scrollbar
import { Link } from "react-scroll";

const Nav = () => {

  return (
    <nav>
      <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
      >
        <AiOutlineHome />
      </Link>
      <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
      >
        <AiOutlineUser />
      </Link>
      <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
      >
        <BiBook />
      </Link>
      <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
      >
        <RiServiceLine />
      </Link>
      <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  )
}

export default Nav
