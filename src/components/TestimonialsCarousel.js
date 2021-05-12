import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import avatar1 from '../avatars/avatar-1.png'
import avatar2 from '../avatars/avatar-2.png'
import avatar3 from '../avatars/avatar-3.png'
import avatar4 from '../avatars/avatar-4.png'
const TestimonialsCarousel = () => {
  return (
    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={4000}
    >
      <>
        <img src={avatar1} alt='avatar1' />
        <div className='myCarousel'>
          <h3>John Dof 1</h3>
          <p>
            t look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt='avatar2' />

        <div className='myCarousel'>
          <h3>John Dof 2</h3>
          <p>
            t look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt='avatar3' />
        <div className='myCarousel'>
          <h3>John Dof 3</h3>
          <p>
            t look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel
