import { Fragment } from "react"
import "./About.scss"

const About = () => {

  return (
    <Fragment>

        <div className="imageHeader">
          <img className="main-pic" src="https://images.unsplash.com/photo-1628927122320-910a679f54b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="main-pic" />
        </div>

        <div className="about-container">
          <div className="image-container">
            <img id="lady" src="https://images.unsplash.com/photo-1531058240690-006c446962d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="lady" />
            <div className="bio-container">
            <h2 className="heading-grow-room">The Grow Room</h2>
            <hr />
              <p className="bio">The Grow Room was born from a deep-seated love and appreciation of the beauty in Mother Nature’s gift to us – flowers. Our dream is to make the experience of gifting and receiving blooms unique and magical for one and all.
            
              Working with only the freshest handpicked blooms available, the skilled floral artists in The Grow Room's team strive to put forth original, elegant floral designs that showcases the natural beauty of these flowers, suitable for every day and every occasion.
              
              Trained in Korea, our team of florists specialize in the fusion style of Korean floral arrangements, which merges high fashion with urban sensibilities, and with particular attention to how flowers are best mixed and matched with inorganic aspects of a floral arrangement, like the wrapping paper and other embellishments.
              
              Apart from the curated designs available on the online store, The Grow Room can create and offer delivery services for bespoke arrangements and bouquets orders, tailor-made for that once-in-a-lifetime occasion or for a very special someone. Speak to us to find out more.</p>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default About