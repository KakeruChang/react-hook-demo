import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '../../../hooks/useWindowSize'

const CountResult = props => {
  const windowSize = useWindowSize()
  const [initialCost, setInitialCost] = useState([])
  const [monthlyCost, setMonthlyCost] = useState([])

  const countPrice = () => {
    let initResult = []
    let monthlyResult = []

    // 1.countplan
    if (props.plan.data.value && props.plan.sim.value) {
      initResult.push({
        text: `${props.plan.data.data}GBプラン(${props.plan.sim.text})`,
        value: props.plan.data.value + props.plan.sim.value
      })
      monthlyResult.push({
        text: `${props.plan.data.data}GBプラン(${props.plan.sim.text})`,
        value: props.plan.data.value + props.plan.sim.value
      })
    } else if (props.plan.data.value) {
      initResult.push({
        text: `${props.plan.data.data}GBプラン`,
        value: props.plan.data.value
      })
      monthlyResult.push({
        text: `${props.plan.data.data}GBプラン`,
        value: props.plan.data.value
      })
    } else if (props.plan.sim.value) {
      initResult.push({
        text: `(${props.plan.sim.text})`,
        value: props.plan.sim.value
      })
      monthlyResult.push({
        text: `(${props.plan.sim.text})`,
        value: props.plan.sim.value
      })
    }

    // 2.countoption
    props.option.forEach(option => {
      if (option.text.length !== 0) {
        let optionText = ''
        option.text.forEach(text => {
          optionText = optionText + text
        })
        initResult.push({
          text: optionText,
          value: option.value
        })
        monthlyResult.push({
          text: optionText,
          value: option.value
        })
      }
    })

    // 3.count fee
    initResult.push({
      text: '新規契約事務手数料',
      value: 3000
    })
    initResult.push({
      text: 'SIMカード発行手数料',
      value: 400
    })
    let taxInit = 0
    let taxMonthly = 0
    initResult.forEach(item => {
      taxInit = taxInit + item.value / 10
    })
    monthlyResult.forEach(item => {
      taxMonthly = taxMonthly + item.value / 10
    })
    initResult.push({
      text: '消費税等',
      value: taxInit
    })
    monthlyResult.push({
      text: '消費税等',
      value: taxMonthly
    })
    setInitialCost(initResult)
    setMonthlyCost(monthlyResult)

    // 4.count result including tax
    let finalInit = 0
    let finalMonthly = 0
    initResult.forEach(item => {
      finalInit = finalInit + item.value
    })
    monthlyResult.forEach(item => {
      finalMonthly = finalMonthly + item.value
    })
    props.setResult({ init: finalInit, monthly: finalMonthly })

    // 5.set the apply data
    let applyCopy = { ...props.apply }
    applyCopy.order = { initResult, monthlyResult }
    props.setApply(applyCopy)
  }

  useEffect(() => {
    countPrice()
    // eslint-disable-next-line
  }, [props.plan, props.option])

  return (
    <div className='container'>
      <div className='p-3'>
        <div className='bg-white rounded p-3'>
          <div className='lm-title border-primary my-3'>初期費用</div>
          <div className='px-5'>
            {initialCost.map((item, index) => (
              <div
                className='row justify-content-between border-bottom border-primary'
                key={index}
              >
                <span className='px-1'>{item.text}</span>
                <span
                  className={classNames('px-1', {
                    'col-12 text-right font-weight-bold': windowSize.width < 576
                  })}
                >
                  {item.value}円
                </span>
              </div>
            ))}
          </div>
          <div className='lm-title border-primary my-3'>月々のお支払い目安</div>
          <div className='px-5'>
            {monthlyCost.map((item, index) => (
              <div
                className='row justify-content-between border-bottom border-primary'
                key={index}
              >
                <span className='px-1'>{item.text}</span>
                <span
                  className={classNames('px-1', {
                    'col-12 text-right font-weight-bold': windowSize.width < 576
                  })}
                >
                  {item.value}円
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='lm-note font-13'>
          分割払いに関する価格は今後消費税等の税率が変更された場合もお申し込み時の税率が適用されます。
        </div>
        <div className='lm-note font-13'>
          初期費用および初回のご利用料金（一部のプラン料金、各種オプション料金、端末料金、ユニバーサルサービス料）は、SIMカード手配時に決済いたします。
        </div>
        <div className='lm-note font-13'>
          ご利用開始月のご利用料金（一部を除く）はお申し込み完了日から5日後を起算日とし、日割り計算いたします。
        </div>
        <div className='lm-note font-13'>
          ご利用のSIMカードの通話料、SMSの通信料はご利用月の翌々月に決済いたします。
        </div>
        <div className='lm-note font-13'>
          端末の分割払いでは、端末の支払い総額に応じて最終月のみ支払い額が変動する場合があります。
        </div>
      </div>
    </div>
  )
}

export default CountResult
