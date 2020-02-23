import React from 'react'
// import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import MUDoubleCircleProgress from './MUDoubleCircleProgress'

const MemberData = props => {
  const { data } = props
  // const [wrapperSize, setWrapperSize] = useState({ height: 0, width: 0 })

  // const measuredRef = useCallback(
  //   node => {
  //     console.log(windowSize)
  //     if (node !== null) {
  //       setWrapperSize({
  //         width: node.getBoundingClientRect().width,
  //         height: node.getBoundingClientRect().height
  //       })
  //     }
  //   },
  //   [windowSize]
  // )

  return (
    <div className='row'>
      <div className='col-md-6 col-12'>
        {/* <div className='col-md-6 col-12' ref={measuredRef}> */}
        <div className='lm-title border-primary m-3'>現在の通信状態</div>
        {/* <MUDoubleCircleProgress
            dataThisMonth={{ origin: 10, now: 9 }}
            dataBefore={{ origin: 20, now: 8.8 }}
            wrapper={wrapperSize}
          /> */}
        <MUDoubleCircleProgress
          dataThisMonth={data.thisMonth}
          dataBefore={data.before}
        />
        <div className='row mx-0 my-3 justify-content-center'>
          <span className='bg-primary col-1' />
          <span className='col-6'>当月のデータ通信残量</span>
          <span className='col-3'>{1024 * data.thisMonth.now}MB</span>
        </div>
        <div className='row mx-0 my-3 justify-content-center'>
          <span className='bg-warning col-1' />
          <span className='col-6'>繰り越しデータ通信残量</span>
          <span className='col-3'>{1024 * data.before.now}MB</span>
        </div>
      </div>
      <div className='col-md-6 col-12'>
        <div className='lm-title border-primary m-3'>使用量</div>
        <div className='m-5 d-flex border-bottom border-primary justify-content-between'>
          <span>通常データ通信</span>
          <span>{(20 - 8.8) * 1024}MB</span>
        </div>
      </div>
      <div className='col-12'>
        <div className='m-3 border-top'>
          <div className='mt-4 lm-note data-note'>
            データ通信容量は繰り越し分より優先して使用いたします。
          </div>
          <div className='lm-note data-note'>
            月の途中のご利用開始の場合はプランのデータ通信容量を日割り計算したデータ通信容量が適用されます。
          </div>
          <div className='lm-note data-note'>
            データ通信容量が無くなると、低速データ通信（200kbps）に切り替わります。
          </div>
          <div className='lm-note data-note'>
            低速データ通信の場合、上り下りともに最大通信速度は200kbpsです。
          </div>
          <div className='lm-note data-note'>
            「節約モード」をONにすると一時的に低速状態に変更できます。
          </div>
          <div className='lm-note data-note'>
            <Link to='/'>通信状態および通信制限に関する詳細はこちら</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

MemberData.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired
}

export default MemberData
