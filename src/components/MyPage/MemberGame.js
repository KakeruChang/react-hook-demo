import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons'

import MemberGameNote from './MemberGameNote'
import { useWindowSize } from '../../hooks/useWindowSize'
import '../../scss/common.scss'
import '../../scss/mypage.scss'

const MemberGame = props => {
  const windowSize = useWindowSize()
  const games = props.games
  const data = props.data

  const gameStateCancelLink = game => {
    if (game.state) {
      return (
        <div>
          <a href='/'>連携を解除する</a>
        </div>
      )
    }
  }
  const countStars = num => {
    let stars = []
    for (let i = 0; i < 5; i++) {
      if (i <= num - 1) {
        stars.push(
          <FontAwesomeIcon icon={faStar} className='text-primary' key={i} />
        )
      } else {
        stars.push(
          <FontAwesomeIcon
            icon={faEmptyStar}
            className='text-primary'
            key={i}
          />
        )
      }
    }
    return stars
  }

  if (windowSize.width < 992) {
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='lm-title border-primary m-3'>連携しているゲーム</div>
          {games.map((game, index) => {
            return (
              <div className='row m-3 game-table-wrapper' key={index}>
                <div className='col-4 border py-4 d-flex justify-content-center align-items-center bg-primary'>
                  <span className='font-weight-bold text-light'>
                    連携ゲーム
                  </span>
                </div>
                <div className='col-8 border py-4 d-flexalign-items-center font-13'>
                  <div>
                    <div>
                      <a href='/'>{game.gameName}</a>
                    </div>
                    <div>ゲームID：{game.gameID}</div>
                  </div>
                </div>
                <div className='col-4 border py-4 d-flex justify-content-center align-items-center bg-primary'>
                  <span className='font-weight-bold text-light'>
                    ステータス
                  </span>
                </div>
                <div className='col-8 border py-4 d-flex align-items-center font-13'>
                  <div>
                    <div>{game.state ? '連携中' : '連携ない'}</div>
                    {gameStateCancelLink(game)}
                  </div>
                </div>
                <div className='col-4 border py-4 d-flex justify-content-center align-items-center bg-primary'>
                  <span className='font-weight-bold text-light'>
                    連携特典付与日
                  </span>
                </div>
                <div className='col-8 border py-4 d-flex align-items-center font-13'>
                  <span>{game.startDate}</span>
                </div>
                <div className='col-4 border py-4 d-flex justify-content-center align-items-center bg-primary'>
                  <span className='font-weight-bold text-light'>
                    前回の利用特典・スター付与日
                  </span>
                </div>
                <div className='col-8 border py-4 d-flex align-items-center font-13'>
                  <span>{game.recentStarDate}</span>
                </div>
                <div className='col-4 border py-4 d-flex justify-content-center align-items-center bg-primary'>
                  <span className='font-weight-bold text-light'>
                    スター獲得数
                  </span>
                </div>
                <div className='col-8 border py-4 d-flex align-items-center font-13'>
                  <span>{countStars(game.star)}</span>
                </div>
              </div>
            )
          })}
          <div className='row justify-content-center m-3'>
            <div className='col-12 font-15'>
              ご契約プラン：{data.thisMonth.origin}GBプラン ({data.plan}) あと
              <span className='h3'>{3 - games.length}</span>
              つ、ゲームと連携できます。
            </div>
          </div>
          <div className='row justify-content-center m-3'>
            <div className='col-md-6 col-12 text-light'>
              <button className='btn btn-primary w-100 game-button'>
                <div className='h5 mb-0'>ゲームと連携する</div>
              </button>
            </div>
          </div>
          <MemberGameNote />
        </div>
      </div>
    )
  } else {
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='lm-title border-primary m-3'>連携しているゲーム</div>
          <div className='row m-3 game-table-wrapper'>
            <div className='col-12 row m-0 p-0 text-center'>
              <div className='col border py-4 d-flex justify-content-center align-items-center bg-primary'>
                <span className='font-weight-bold text-light'>連携ゲーム</span>
              </div>
              <div className='col border py-4 d-flex justify-content-center align-items-center bg-primary'>
                <span className='font-weight-bold text-light'>ステータス</span>
              </div>
              <div className='col border py-4 d-flex justify-content-center align-items-center bg-primary'>
                <span className='font-weight-bold text-light'>
                  連携特典付与日
                </span>
              </div>
              <div className='col border py-4 d-flex justify-content-center align-items-center bg-primary'>
                <span className='font-weight-bold text-light'>
                  前回の利用特典・スター付与日
                </span>
              </div>
              <div className='col border py-4 d-flex justify-content-center align-items-center bg-primary'>
                <span className='font-weight-bold text-light'>
                  スター獲得数
                </span>
              </div>
            </div>

            {games.map((game, index) => {
              return (
                <div className='col-12 row m-0 p-0 text-center' key={index}>
                  <div className='col border py-4 d-flex justify-content-center align-items-center font-13'>
                    <div>
                      <div>
                        <a href='/'>{game.gameName}</a>
                      </div>
                      <div>ゲームID：{game.gameID}</div>
                    </div>
                  </div>
                  <div className='col border py-4 d-flex justify-content-center align-items-center font-13'>
                    <div>
                      <div>{game.state ? '連携中' : '連携ない'}</div>
                      {gameStateCancelLink(game)}
                    </div>
                  </div>
                  <div className='col border py-4 d-flex justify-content-center align-items-center font-13'>
                    <span>{game.startDate}</span>
                  </div>
                  <div className='col border py-4 d-flex justify-content-center align-items-center font-13'>
                    <span>{game.recentStarDate}</span>
                  </div>
                  <div className='col border py-4 d-flex justify-content-center align-items-center font-13'>
                    <span>{countStars(game.star)}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='row justify-content-center m-3'>
            <div className='col-12 font-15'>
              ご契約プラン：{data.thisMonth.origin}GBプラン ({data.plan}) あと
              <span className='h3'>{3 - games.length}</span>
              つ、ゲームと連携できます。
            </div>
          </div>
          <div className='row justify-content-center m-3 pt-3 border-top'>
            <div className='col-md-6 col-12 text-light'>
              <button className='btn btn-primary w-100 game-button'>
                <div className='h5 mb-0'>ゲームと連携する</div>
              </button>
            </div>
          </div>
          <MemberGameNote />
        </div>
      </div>
    )
  }
}

export default MemberGame
