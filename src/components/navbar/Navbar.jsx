import './navbar.scss'
import logo from '../../images/logo.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} />
      <div className='links'>
      <a href='#'>Features</a>
      <a href='#'>Teams</a>
      <a href='#'>Sign in</a>
      </div>

    </div>
  )
}

export default Navbar
