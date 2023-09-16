import './reviews.scss'
import quote from '../../images/bg-quotes.png'
import p1 from '../../images/profile-1.jpg'
import p2 from '../../images/profile-2.jpg'
import p3 from '../../images/profile-3.jpg'

const Reviews = () => {
    const reviews=[
        {
            id:1,
            img:p1,
            name:'Satish Patel',
            position:'Founder & CEO, Huddle',
            comment:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        },
        {
            id:2,
            img:p2,
            name:'Satish Patel',
            position:'Founder & CEO, Huddle',
            comment:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        },
        {
            id:3,
            img:p3,
            name:'Satish Patel',
            position:'Founder & CEO, Huddle',
            comment:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
        }
    ]
  return (
    <div className='reviews-container' >
      <img src={quote} />
      <div id='reviews' className='reviews'>
      {reviews?.map((item)=>{
        return <div key={item?.id} className='review' data-aos="fade-right" data-aos-duration='1000' >
            <p>{item?.comment}</p>
            <div className='reviewBy'>
                <img src={item?.img} />
                <div>
                    <h5>{item?.name}</h5>
                    <p>{item?.position}</p>
                </div>
            </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default Reviews
