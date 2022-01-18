import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import logo from '../../assets/logoWhite.png'
import StyledFooter from './style'


function Footer () {
  return (
    <StyledFooter>
      <div className="container">
        <Link to='/' className='logo-container'>
          <img src={logo} alt='Brand logo' className='logo' />
        </Link>
        <div className='links' >
          <Link to="/" className='link' >Home</Link>
          <Link to="/works" className='link' >Works</Link>
          <Link to="/blog" className='link' >Blog</Link>
          <Link to="/contact" className='link' >Contact</Link>
          <p className='copyright' >Copyright ©2022. All rights reserved</p>
        </div>
        <div className="icons-container">
          <Link to='https://github.com/vinicmd' className='icon' >
            <FaGithub  />
          </Link>
          <Link to='https://www.linkedin.com/in/viniduartedev/' >
            <FaLinkedinIn className='icon-inverted' />
          </Link>
          <Link to='https://twitter.com/viniduartedev' >
            <FaTwitter className='icon-inverted' />
          </Link>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
