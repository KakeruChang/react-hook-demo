import React from 'react'
// import React, { useState, useCallback } from 'react'
import MUDoubleCircleProgress from './MUDoubleCircleProgress'

import '../../scss/common.scss'

const MemberData = () => {
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
    <div>
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
            dataThisMonth={{ origin: 10, now: 9 }}
            dataBefore={{ origin: 20, now: 8.8 }}
          />
          <div className='row mx-0 my-3 justify-content-center'>
            <span className='bg-primary col-1'></span>
            <span className='col-6'>当月のデータ通信残量</span>
            <span className='col-3'>{1024 * 10}MB</span>
          </div>
          <div className='row mx-0 my-3 justify-content-center'>
            <span className='bg-success col-1'></span>
            <span className='col-6'>繰り越しデータ通信残量</span>
            <span className='col-3'>{1024 * 8.8}MB</span>
          </div>
        </div>
        <div className='col-md-6 col-12'>
          <div className='lm-title border-primary m-3'>使用量</div>
          <div className='m-5 d-flex border-bottom border-primary justify-content-between'>
            <span>通常データ通信</span>
            <span>{(20 - 8.8) * 1024}MB</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberData
