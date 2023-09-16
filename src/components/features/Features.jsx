import  './features.scss'
import f1 from '../../images/feature1.svg';
import f2 from '../../images/feature2.svg'
import f3 from '../../images/feature3.svg'
import f4 from '../../images/feature4.svg'

const Features = () => {
    const features=[
        {id:1,
        img:f1,
        title:'Access your files, anywhere',
        text:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {id:2,
        img:f2,
        title:'Security you can trust',
        text:"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {id:3,
        img:f3,
        title:'Real-time collaboration',
        text:"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {id:4,
        img:f4,
        title:'Store any type of file',
        text:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    },
    ]
  return (
    <div id='features' className='features'>
      {features?.map((item)=>{
        return <div  data-aos="fade-up" data-aos-duration='1000' className='feature' key={item?.id}>
            <img src={item?.img} />
            <h3>{item?.title}</h3>
            <p>{item?.text}</p>
        </div>
      })}
    </div>
  )
}

export default Features
