import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbsUp,
  faGift,
  faYenSign,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'

const TopMenu = () => {
  return (
    <div className='bg-light py-3'>
      <div className='container'>
        <div className='row'>
          <Link
            to='/#'
            className='col-md-3 col-6 d-flex justify-content-center h6 text-decoration-none border-left  border-right  border-secondary'
          >
            <FontAwesomeIcon icon={faThumbsUp} className='text-primary' />
            <span className='px-2 text-dark'>LinksMateの特徴</span>
          </Link>
          <Link
            to='/#'
            className='col-md-3 col-6 d-flex justify-content-center h6 text-decoration-none border-left  border-right  border-secondary'
          >
            <FontAwesomeIcon icon={faGift} className='text-primary' />
            <span className='px-2 text-dark'>ゲーム連携・特典</span>
          </Link>
          <Link
            to='/#'
            className='col-md-3 col-6 d-flex justify-content-center h6 text-decoration-none border-left  border-right  border-secondary'
          >
            <FontAwesomeIcon icon={faYenSign} className='text-primary' />
            <span className='px-2 text-dark'>プラン・料金</span>
          </Link>
          <Link
            to='/#'
            className='col-md-3 col-6 d-flex justify-content-center h6 text-decoration-none border-left  border-right  border-secondary'
          >
            <FontAwesomeIcon icon={faQuestion} className='text-primary' />
            <span className='px-2 text-dark'>サポート・ヘルプ</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
