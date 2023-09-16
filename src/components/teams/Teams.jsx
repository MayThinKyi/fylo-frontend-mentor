import './teams.scss'
import teams from '../../images/illustration-stay-productive.png'
const Teams = () => {
  return (
    <div className='teams'>
      <img src={teams} data-aos="fade-right" data-aos-duration='1000'  />
      <div data-aos="fade-left" data-aos-duration='1000' >
        <h1>Stay productive, wherever you are</h1>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <a href='#'>See how fylo works </a>
      </div>
    </div>
  )
}

export default Teams
