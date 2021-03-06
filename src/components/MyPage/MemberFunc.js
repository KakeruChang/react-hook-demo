import React, { useEffect } from 'react'
// import React, { useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MemberData from './MemberData'
import MemberPhone from './MemberPhone'
import MemberGame from './MemberGame'
import MemberLP from './MemberLP'
// import { HooksContext, UPDATE_POST } from '../../hooks/HookContext'
// import { findUser } from '../../api/firebase'
import { fetchDataBegin } from '../../action/firebaseAction'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'

const MemberFunc = () => {
  // const { dispatch, data, user } = useContext(HooksContext)
  // const { dispatch, user } = useContext(HooksContext)
  const isLoggedIn = useIsLoggedIn()
  const dispatchRedux = useDispatch()
  const data = useSelector(state => {
    return state.data
  })

  // const checkExist = async () => {
  //   const result = await findUser(user.email)

  //   dispatch({ type: UPDATE_POST, user: result[0].user })
  // }
  // const checkExistRedux = () => {
  //   dispatchRedux(updatePost(findUser(user.email)))
  // }
  useEffect(() => {
    if (isLoggedIn) {
      if (isLoggedIn.email) {
        dispatchRedux(fetchDataBegin(isLoggedIn.email))
      }
    }
    // eslint-disable-next-line
  }, [isLoggedIn])
  // useEffect(() => {
  //   if (user) {
  //     if (user.email) {
  //       checkExist()
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [user])

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
      <div className='tab-content mb-3' id='nav-tabContent'>
        <div
          className='tab-pane fade border rounded show active'
          id='nav-data'
          role='tabpanel'
          aria-labelledby='nav-data-tab'
        >
          <MemberData data={data.user.data} />
        </div>
        <div
          className='tab-pane fade border rounded'
          id='nav-phone'
          role='tabpanel'
          aria-labelledby='nav-phone-tab'
        >
          <MemberPhone phone={data.user.phone} />
        </div>
        <div
          className='tab-pane fade border rounded'
          id='nav-game'
          role='tabpanel'
          aria-labelledby='nav-game-tab'
        >
          <MemberGame games={data.user.games} data={data.user.data} />
        </div>
        <div
          className='tab-pane fade border rounded'
          id='nav-lp'
          role='tabpanel'
          aria-labelledby='nav-lp-tab'
        >
          <MemberLP LP={data.user.LP} />
        </div>
      </div>
    </>
  )
}

export default MemberFunc
