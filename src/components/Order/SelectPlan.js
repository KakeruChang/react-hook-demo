import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ChoosePlan from './SelectPlan/ChoosePlan'
import ChooseExtraOption from './SelectPlan/ChooseExtraOption'
import CountResult from './SelectPlan/CountResult'
import NecessaryInput from '../common/NecessaryInput'

const SelectPlan = props => {
  const { history, plan, setPlan, option, setOption, apply, setApply } = props
  const [result, setResult] = useState({ init: 0, monthly: 0 })
  const [empty, setEmpty] = useState([])

  const checkEmpty = () => {
    const checkResult = []
    if (!plan.sim.value) {
      checkResult.push('利用する機能を選ぶ')
    }
    if (!plan.data.value) {
      checkResult.push('データ通信容量を選ぶ')
    }
    setEmpty(checkResult)
  }

  const goToInfo = () => {
    if (empty.length === 0) {
      history.push('/order/informationinput')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    checkEmpty()
    // eslint-disable-next-line
  }, [plan])

  return (
    <>
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
          option={option}
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
        <CountResult
          plan={plan}
          option={option}
          setResult={setResult}
          apply={apply}
          setApply={setApply}
        />
      </div>
      <div className='container my-5'>
        {empty.length > 0 && <NecessaryInput inputs={empty} />}
      </div>
      <div className='container'>
        <div className='row justify-content-center my-3'>
          <div className='col-12'>
            <button
              type='button'
              className='btn btn-warning text-light w-100 py-2'
              onClick={goToInfo}
            >
              <div className='h5'>次へ</div>
            </button>
          </div>
        </div>
        <div className='row justify-content-center my-3'>
          <div className='col-md-6 col-12'>
            <Link
              className='simu-area text-decoration-none w-100 py-2'
              to='/order'
            >
              <div className='h5'>戻る</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

SelectPlan.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  plan: PropTypes.objectOf(PropTypes.object).isRequired,
  option: PropTypes.arrayOf(PropTypes.object).isRequired,
  apply: PropTypes.objectOf(PropTypes.object).isRequired,
  setPlan: PropTypes.func.isRequired,
  setOption: PropTypes.func.isRequired,
  setApply: PropTypes.func.isRequired
}

export default SelectPlan
