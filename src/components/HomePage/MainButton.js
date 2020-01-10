import React from 'react'
import { Link } from 'react-router-dom'

import '../../scss/homePage.scss'
import MainButtonImg from '../../assets/order_top_btn_form.png'

const MainButton = () => {
  return (
    <div className='bg-primary text-light text-center py-4'>
      <div className='container'>
        <h1>
          LinksMateで
          <span className='text-warning'>もっとゲームを楽しもう！</span>
        </h1>
        <Link to='/' className='main-button'>
          <img src={MainButtonImg} className='img-fluid' alt='MainButton' />
        </Link>
      </div>
    </div>
  )
}

export default MainButton
