import React from 'react'
import { Link } from 'react-router-dom'

const Carousel = () => {
  return (
    <div
      id='carouselExampleControls'
      className='carousel slide'
      data-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src='/assets/slide_main_plan_increase19.png'
            className='d-block w-100'
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='/assets/slide_main_191219epicseven.png'
            className='d-block w-100'
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='/assets/slide_main_191126_rogphone2.png'
            className='d-block w-100'
            alt='...'
          />
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleControls'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleControls'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  )
}

export default Carousel
