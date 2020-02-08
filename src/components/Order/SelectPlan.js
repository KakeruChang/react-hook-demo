import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ChoosePlan from './SelectPlan/ChoosePlan'
import ChooseExtraOption from './SelectPlan/ChooseExtraOption'
import CountResult from './SelectPlan/CountResult'

const SelectPlan = () => {
  const [plan, setPlan] = useState({ sim: {}, data: {} })
  const [option, setOption] = useState([])
  const [result, setResult] = useState({ init: 0, monthly: 0 })

  return (
    <div>
      <div className='bg-dark'>
        <div className='container'>
          <div className='h5 py-2 my-3 font-weight-bold text-light'>
            ◆ プランの選択
          </div>
        </div>
      </div>
      <ChoosePlan plan={plan} setPlan={setPlan} />
      <div className='bg-dark'>
        <div className='container'>
          <div
            className='px-2 mt-3 font-weight-bold text-light'
            style={{ fontSize: '1.25rem' }}
          >
            ◆ 追加オプションを選ぶ
          </div>
        </div>
      </div>
      <div className='bg-grey py-3'>
        <ChooseExtraOption
          plan={plan}
          setPlan={setPlan}
          setOption={setOption}
        />
      </div>
      <div className='bg-dark'>
        <div className='container'>
          <div
            className='px-2 font-weight-bold text-light row'
            style={{ fontSize: '1.25rem' }}
          >
            <div className='col-md-6 col-12 text-center'>
              初期費用 <span className='text-warning'>{result.init}円</span>
            </div>
            <div className='col-md-6 col-12 text-center'>
              月々のお支払い目安
              <span className='text-warning'>{result.monthly}円</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-sky-blue py-3'>
        <CountResult plan={plan} option={option} setResult={setResult} />
      </div>
      <div className='container'>
        <div className='row justify-content-center my-3'>
          <div className='col-12'>
            <Link
              className='btn btn-warning text-light w-100 py-3'
              to='/order/informationinput'
            >
              <div className='h3'>次へ</div>
            </Link>
          </div>
        </div>
        <div className='row justify-content-center my-3'>
          <div className='col-md-6 col-12'>
            <Link
              className='simu-area text-decoration-none w-100 py-3'
              to='/order'
            >
              <div className='h3'>戻る</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectPlan
