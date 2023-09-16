import './hero.scss'
import hero from '../../images/illustration-intro.png'
import Button from '../ui/button/Button'
const Hero = () => {
  return (
    <div className="hero" data-aos="fade-right" data-aos-duration='2000'>
        <img src={hero} />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <Button/>
    </div>
  )
}

export default Hero
