import React from 'react'
import TestimonialsCarousels from './TestimonialsCarousel';
const Testimonials = () => {
    return (
        <div id='testimonials' className='testimonials text-center py-5'>
            <h1 className='mb-5 text-uppercase'>my happy clients</h1>
            <div className='container'>
                <div className='testimonials-content d-flex align-items-center'>
                    <TestimonialsCarousels/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
