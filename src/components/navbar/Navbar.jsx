import './navbar.scss'
import logo from '../../images/logo.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} />
      <div className='links'>
      <a href='#features'>Features</a>
      <a href='#teams'>Teams</a>
      <a href='#reviews'>Reviews</a>
      </div>

    </div>
  )
}

export default Navbar
