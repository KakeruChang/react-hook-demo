import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '../../../hooks/useWindowSize'
import data from '../../../data/data'
import popup from '../../../assets/order/icon_18_popup.png'

const ChooseExtraOption = props => {
  const windowSize = useWindowSize()
  const [optionActive, setOptionActive] = useState([
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 }
  ])

  const arrayToString = array => {
    if (typeof array === 'object' && array.length) {
      let result = ''
      array.forEach(item => {
        result = result + item
      })
      return result
    }
    return array
  }

  const chooseOption = (option, index) => {
    console.log('chooseOption')
    const result = JSON.parse(JSON.stringify(optionActive))

    // check if this option is chosen
    if (
      optionActive[index].text.length !== 0 &&
      option.text[0] === optionActive[index].text[0] &&
      option.text[1] === optionActive[index].text[1]
    ) {
      console.log('check if this option is chosen')
      result[index] = { text: [], value: 0 }
      setOptionActive(result)
      props.setOption(result)
      // countPrice([{ index: 2, value: result }])
      return
    }

    // limited option
    // get result
    result[index] = Object.assign({}, option)
    const plan = Object.assign({}, props.plan)
    if (
      option.text[0] === data.homePage.simulation.option[0].text[0] ||
      option.text[0] === data.homePage.simulation.option[1].text[0] ||
      option.text[0] === data.homePage.simulation.option[2].text[0]
    ) {
      const newPart1 = {
        text: data.homePage.simulation.simType[0].text,
        value: data.homePage.simulation.simType[0].value
      }
      plan.sim = newPart1
      props.setPlan(plan)
      setOptionActive(result)
      props.setOption(result)
      // countPrice([
      //   { value: newPart1.value, index: 0 },
      //   { value: result, index: 2 }
      // ])
      return
    }

    // common option
    setOptionActive(result)
    props.setOption(result)
    // countPrice([{ value: result, index: 2 }])
  }

  const optionButton = (list, part) => {
    return list.map((choice, index) => {
      return (
        <div className='col-12 row justify-content-center mx-0' key={index}>
          <div
            className={classNames(
              'col-12 bg-white border border-primary rounded my-3',
              'extra-option',
              { 'px-3 py-4': windowSize.width >= 576 },
              { 'py-0 pr-0': windowSize.width < 576 }
            )}
            onClick={event => {
              event.preventDefault()
              console.log('click')
              chooseOption(choice, index)
            }}
          >
            <input
              className={classNames(
                { 'mx-4': windowSize.width >= 576 },
                { 'mr-3': windowSize.width < 576 }
              )}
              type='checkbox'
              name='chooseExtraOption'
              id={`extraOption${index}`}
              value={choice.text}
              onChange={event => {}}
              checked={
                arrayToString(choice.text) === arrayToString(part[index].text)
              }
            />
            <label
              htmlFor={`extraOption${index}`}
              className={classNames(
                'mb-0',
                { h5: windowSize.width >= 576 },
                { h6: windowSize.width < 576 }
              )}
            >
              {choice.text.map((item, index) => {
                return (
                  <span className='font-weight-bold' key={index}>
                    {item}
                  </span>
                )
              })}
              {`+${choice.value}円/月額`}
            </label>
            <div
              className={classNames(
                'border-primary py-3 px-0 font-weight-bold row mx-0',
                { 'border rounded': windowSize.width >= 576 },
                { 'border-left': windowSize.width < 576 }
              )}
            >
              <div className='col-12 extra-option-detail'>
                詳細
                <img src={popup} alt='' />
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  const checkSim = sim => {
    const optionResult = JSON.parse(JSON.stringify(optionActive))
    // limited Sim
    // choose 2nd or 3rd plan
    if (
      sim.text === data.homePage.simulation.simType[1].text ||
      sim.text === data.homePage.simulation.simType[2].text
    ) {
      // choose 1st or 2nd or 3rd option
      if (
        optionActive[0].text.length !== 0 ||
        optionActive[1].text.length !== 0 ||
        optionActive[2].text.length !== 0
      ) {
        // reset 1st or 2nd or 3rd option
        for (let i = 0; i < 3; i++) {
          optionResult[i] = { text: [], value: 0 }
        }
        setOptionActive(optionResult)
      }
    }
  }

  useEffect(() => {
    checkSim(props.plan.sim)
    // eslint-disable-next-line
  }, [props.plan.sim])

  return (
    <div className='container'>
      {optionButton(data.homePage.simulation.option, optionActive)}
      <div className='lm-note ml-4'>価格表示はすべて「税抜き」です。</div>
    </div>
  )
}

export default ChooseExtraOption
