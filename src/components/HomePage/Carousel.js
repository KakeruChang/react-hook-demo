import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'

import constants from '../../data/constants'

const Carousel = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      id='carouselExampleControls'
      className='carousel slide container'
      data-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src={constants.carousel[0]}
            className='d-block w-100'
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src={constants.carousel[1]}
            className='d-block w-100'
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src={constants.carousel[2]}
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
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleControls'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='sr-only'>Next</span>
      </a>
    </div>
  )
}

export default Carousel
