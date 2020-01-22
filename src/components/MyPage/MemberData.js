import React from 'react'
import MUDoubleCircleProgress from './MUDoubleCircleProgress'

import '../../scss/common.scss'

const MemberData = () => {
  const [height, setHeight] = React.useState(0)
  const measuredRef = React.useCallback(node => {
    console.log(node)
    if (node !== null) {
      setHeight(node.getBoundingClientRect().width)
    }
  }, [])

  return (
    <div>
      <div className='row'>
        <div className='col-md-6 col-12' ref={measuredRef}>
          <div className='lm-title border-primary m-3'>現在の通信状態</div>
          {/* <h2>The above header is {Math.round(height)}px tall</h2> */}
          <MUDoubleCircleProgress
            dataThisMonth={{ origin: 10, now: 10 }}
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
