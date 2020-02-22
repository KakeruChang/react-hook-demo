import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { signup, addData } from '../../api/firebase'
import moment from 'moment'

const CheckOrder = props => {
  const { apply, plan, history, setApply } = props

  const makeFakeData = () => {
    const thisDay = moment()
    const today = {
      year: thisDay.format('YYYY'),
      month: thisDay.format('MM'),
      day: thisDay.format('DD')
    }

    const user = {
      data: {
        thisMonth: {
          origin: plan.data.data,
          now: plan.data.data
        },
        before: {
          origin: 2 * plan.data.data,
          now: 2 * (Math.floor(Math.random() * 11) / 10) * plan.data.data
        },
        plan: plan.sim.text
      },
      phone: {
        thisMonth: {
          date: { year: today.year, month: today.month },
          content: [
            {
              number: `070-${Math.floor(Math.random() * 10000)}-${Math.floor(
                Math.random() * 10000
              )}`,
              value: Math.floor(Math.random() * 1000)
            }
          ]
        },
        before: [
          {
            value: Math.floor(Math.random() * 1000),
            date: {
              year: thisDay.subtract(3, 'months').format('YYYY'),
              month: thisDay.subtract(3, 'months').format('MM')
            }
          },
          {
            value: Math.floor(Math.random() * 1000),
            date: {
              year: thisDay.subtract(2, 'months').format('YYYY'),
              month: thisDay.subtract(2, 'months').format('MM')
            }
          },
          {
            value: Math.floor(Math.random() * 1000),
            date: {
              year: thisDay.subtract(1, 'months').format('YYYY'),
              month: thisDay.subtract(1, 'months').format('MM')
            }
          }
        ]
      },
      games: [
        {
          gameName: 'グランブルーファンタジー',
          gameID: Math.floor(Math.random() * 10000000),
          state: true,
          startDate: `${thisDay
            .subtract(2, 'months')
            .format('YYYY')}年${thisDay
            .subtract(2, 'months')
            .format('MM')}月${thisDay.subtract(2, 'months').format('DD')}日`,
          recentStarDate: `${today.year}年${today.month}月${today.day}日`,
          star: 2
        }
      ],
      LP: Math.floor(Math.random() * 10000)
    }
    return user
  }

  const checkApply = () => {
    signup(apply.info.email, apply.info.password)
    addData(apply.info, { data: apply.order, user: makeFakeData() })
    setApply({
      order: {},
      info: {
        firstname: '',
        lastname: '',
        birthYear: 0,
        birthMonth: 0,
        birthDay: 0,
        sex: '',
        address: '',
        phone: '',
        email: '',
        password: ''
      }
    })
    history.push('/order/completeorder')
  }

  useEffect(() => {
    if (Object.keys(apply.order).length === 0 || !apply.info.address) {
      history.push('/order')
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='bg-dark'>
        <div className='container'>
          <div className='h5 py-2 my-3 font-weight-bold text-light'>
            選んだサービス
          </div>
        </div>
      </div>
      <div className='container'>
        <table className='table table-bordered table-choose-plan'>
          <tbody>
            {apply.order.monthlyResult &&
              apply.order.monthlyResult.map(item => {
                if (item.text === '消費税等') {
                  return false
                }
                return (
                  <tr key={item.text}>
                    <th scope='col'>{item.text}</th>
                    <td className='h5'>{item.value}円</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <div className='bg-dark'>
        <div className='container'>
          <div className='h5 py-2 my-3 font-weight-bold text-light'>
            お客さまの情報
          </div>
        </div>
      </div>
      <div className='container'>
        {apply.info.firstname && (
          <table className='table table-bordered table-choose-plan'>
            <tbody>
              <tr>
                <th scope='col'>お名前</th>
                <td className='font-13'>
                  {apply.info.firstname} {apply.info.lastname}
                </td>
              </tr>
              <tr>
                <th scope='col'>誕生日</th>
                <td className='font-13'>
                  {apply.info.birthYear}/{apply.info.birthMonth}/
                  {apply.info.birthDay}
                </td>
              </tr>
              <tr>
                <th scope='col'>性別</th>
                <td className='font-13'>{apply.info.sex}</td>
              </tr>
              <tr>
                <th scope='col'>住所</th>
                <td className='font-13'>{apply.info.address}</td>
              </tr>
              <tr>
                <th scope='col'>電話</th>
                <td className='font-13'>{apply.info.phone}</td>
              </tr>
              <tr>
                <th scope='col'>メールアドレス</th>
                <td className='font-13'>{apply.info.email}</td>
              </tr>
              <tr>
                <th scope='col'>パスワード</th>
                <td className='font-13'>{apply.info.password}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div className='container'>
        <div className='row justify-content-center my-3'>
          <div className='col-12'>
            <button
              type='button'
              className='btn btn-warning text-light w-100 py-2'
              onClick={checkApply}
            >
              <div className='h5'>申し込む</div>
            </button>
          </div>
        </div>
        <div className='row justify-content-center my-3'>
          <div className='col-md-6 col-12'>
            <Link
              className='simu-area text-decoration-none w-100 py-2'
              to='/order/informationinput'
            >
              <div className='h5'>戻る</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOrder
