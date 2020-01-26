import React from 'react'

import '../../scss/common.scss'
import '../../scss/mypage.scss'

const MemberLP = props => {
  return (
    <div className='row'>
      <div className='col-12'>
        <div className='lm-title border-primary m-3'>所有LP</div>
        <div className='row m-3'>
          <div className='col-md-3 col-12 py-3 border border-primary text-center bg-primary text-light h5 mb-0'>
            使用できるLP
          </div>
          <div className='col-md-9 col-12 py-3 border border-primary text-right h5 mb-0'>
            {props.LP}LP
          </div>
        </div>
        <div className='lm-note lp-note'>
          音声通話料金用に固定されたLPは、その他の用途では使用できません。
        </div>
        <div className='lm-note lp-note mb-3'>
          音声通話料金の決済は、使用月の2ヵ月後です。
        </div>
        <div className='row  m-3'>
          <button className='btn btn-primary w-100 text-light'>
            LPを購入する
          </button>
        </div>
      </div>
    </div>
  )
}

export default MemberLP
