import logo from '../../assets/logo.png'
import StyledHeader from './style'
import { Link } from 'react-router-dom'

function Header (route) {
  const address = route.page

  return (
    <StyledHeader>
      <div className='container'>
        <Link to="/" className='logo-container'>
          <img src={logo} alt="Logo da empresa" className='logo-image' />
        </Link>
        <div className='links' >
          <Link to="/" className={address === 'home' ? 'clicked' : 'link' } >Home</Link>
          <Link to="/works" className={address === 'works' ? 'clicked' : 'link' } >Works</Link>
          <Link to="/blog" className={address === 'blog' ? 'clicked' : 'link' } >Blog</Link>
          <Link to="/contact" className={address === 'contact' ? 'clicked' : 'link' } >Contact</Link>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
