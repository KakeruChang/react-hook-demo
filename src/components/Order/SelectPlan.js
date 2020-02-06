import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ChoosePlan from './SelectPlan/ChoosePlan'
import ChooseExtraOption from './SelectPlan/ChooseExtraOption'

const SelectPlan = () => {
  const [plan, setPlan] = useState({ sim: {}, data: {} })

  return (
    <div>
      <div className='bg-dark'>
        <div className='container'>
          <div className='h5 py-2 my-3 font-weight-bold text-light'>
            ◆ プランの選択
          </div>
        </div>
      </div>
      <ChoosePlan setPlan={setPlan} />
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
        <ChooseExtraOption plan={plan} />
      </div>
      <Link to='/order/informationinput'>informationinput</Link>
    </div>
  )
}

export default SelectPlan
