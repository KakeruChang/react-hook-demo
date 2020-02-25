import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import data from '../../data/data'
import useWindowSize from '../../hooks/useWindowSize'

const CompleteOrder = () => {
  const { width } = useWindowSize()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='container'>
      {width >= 992 && (
        <div
          className='py-5 row justify-content-center'
          style={{
            background: `url(${data.order.complete.around}) no-repeat center center`
          }}
        >
          <span>
            <img
              src={data.order.complete.center}
              className='img-fluid mr-5'
              alt=''
            />
          </span>
        </div>
      )}
      {width < 992 && (
        <img src={data.order.complete.rwd} className='img-fluid my-3' alt='' />
      )}
      <div className='row justify-content-center my-3'>
        <div className='col-md-6 col-12'>
          <Link to='/' className='btn btn-warning text-light w-100 py-3'>
            <span className='font-weight-bolder h4'>ホームページへ</span>
          </Link>
        </div>
      </div>
      <h1
        className={classNames(
          'text-center text-primary my-5 border  border-primary',
          { h3: width < 992 && width >= 576 },
          { h5: width < 576 },
          { 'p-5': width >= 992 },
          { 'p-3': width < 992 }
        )}
        style={{ borderRadius: 100 }}
      >
        申し込み完了しました。おめでとうございます！
      </h1>
    </div>
  )
}

export default CompleteOrder
