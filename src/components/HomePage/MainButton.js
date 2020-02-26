import React from 'react'
import { Link } from 'react-router-dom'

import MainButtonImg from '../../assets/order_top_btn_form.png'
import useWindowSize from '../../hooks/useWindowSize'

const MainButton = () => {
  const { width } = useWindowSize()

  return (
    <div className='bg-primary text-light text-center py-4'>
      <div className='container'>
        <h1 className={width <= 576 ? 'h3' : ''}>
          LinksMateで
          <span className='text-warning'>もっとゲームを楽しもう！</span>
        </h1>
        <Link to='/order' className='main-button'>
          <img src={MainButtonImg} className='img-fluid' alt='MainButton' />
        </Link>
      </div>
    </div>
  )
}

export default MainButton
