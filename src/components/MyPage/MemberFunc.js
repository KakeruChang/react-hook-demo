import React from 'react'
// import { Link } from 'react-router-dom'
import '../../scss/mypage.scss'
import MemberData from './MemberData'

const MemberFunc = () => {
  return (
    <>
      <nav>
        <div
          className='nav nav-tabs  nav-justified'
          id='nav-tab'
          role='tablist'
        >
          <a
            href='#nav-data'
            className='nav-link nav-item active'
            id='nav-data-tab'
            data-toggle='tab'
            role='tab'
            aria-controls='nav-data'
            aria-selected='true'
          >
            データ通信
          </a>
          <a
            href='#nav-phone'
            className='nav-link nav-item'
            id='nav-phone-tab'
            data-toggle='tab'
            role='tab'
            aria-controls='nav-phone'
            aria-selected='false'
          >
            通話
          </a>
          <a
            href='#nav-game'
            className='nav-link nav-item'
            id='nav-game-tab'
            data-toggle='tab'
            role='tab'
            aria-controls='nav-game'
            aria-selected='false'
          >
            ゲーム連携
          </a>
          <a
            href='#nav-lp'
            className='nav-link nav-item'
            id='nav-lp-tab'
            data-toggle='tab'
            role='tab'
            aria-controls='nav-lp'
            aria-selected='false'
          >
            LP管理
          </a>
        </div>
      </nav>
      <div className='tab-content' id='nav-tabContent'>
        <div
          className='tab-pane fade border rounded show active'
          id='nav-data'
          role='tabpanel'
          aria-labelledby='nav-data-tab'
        >
          <MemberData />
        </div>
        <div
          className='tab-pane fade border rounded'
          id='nav-phone'
          role='tabpanel'
          aria-labelledby='nav-phone-tab'
        >
          phone
        </div>
        <div
          className='tab-pane fade border rounded'
          id='nav-game'
          role='tabpanel'
          aria-labelledby='nav-game-tab'
        >
          game
        </div>
        <div
          className='tab-pane fade border rounded'
          id='nav-lp'
          role='tabpanel'
          aria-labelledby='nav-lp-tab'
        >
          lp
        </div>
      </div>
    </>
  )
}

export default MemberFunc