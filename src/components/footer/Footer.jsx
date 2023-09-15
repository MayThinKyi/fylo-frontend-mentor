import './footer.scss'
import logo from '../../images/logo.svg'
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa';

const Footer = () => {
  const socials=[{
    icon:<FaFacebookF size={22}/>
  },
  {
    icon:<FaInstagram size={22}/>
  },
  {
    icon:<FaTwitter size={22}/>
  }]
  return (
    <div className='footer'>
      <img src={logo} />
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit 
    </p>
    <ul>
      <li>About Us</li>
      <li>Jobs</li>
      <li>Press</li>
      <li>Blogs</li>
    </ul>
    <ul>
      <li>Contact Us</li>
      <li>Terms</li>
      <li>Privacy</li>
      <li>Agreement</li>
    </ul>
    <div className='socials'>
      {socials?.map((item)=>{
        return <div className='icon'>
          {item?.icon}
        </div>
      })}
    </div>
    </div>
  )
}

export default Footer
