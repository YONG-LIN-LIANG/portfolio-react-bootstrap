import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
  return (
    <div id='services' className='services py-5'>
        <h1 className='text-center pb-5'>my services</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-3 text-center outside-box'>
              <div className='box'>
            <div className='circle'>
              <FontAwesomeIcon icon={faDesktop} size='2x' />
            </div>
            <h3>Web Design</h3>
            <p>
              I approach each project individually and always focus on the
              result.
            </p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3 text-center outside-box'>
          <div className='box'>
            <div className='circle'>
              <FontAwesomeIcon icon={faFileCode} size='2x' />
            </div>
            <h3>Web Development</h3>
            <p>Your websit will be built with an new proven technology.</p>
          </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3 text-center outside-box'>
          <div className='box'>
            <div className='circle'>
              <FontAwesomeIcon icon={faFacebookF} size='2x' />
            </div>
            <h3>Facebook Ads SMM</h3>
            <p>
              Your potential clients well see your services or product on
              Facebook.
            </p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3 text-center outside-box'>
          <div className='box'>
            <div className='circle'>
              <FontAwesomeIcon icon={faGoogle} size='2x' />
            </div>
            <h3>Google Ads</h3>
            <p>
              Your servicce or product will appear at the top of the Google
              search.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
