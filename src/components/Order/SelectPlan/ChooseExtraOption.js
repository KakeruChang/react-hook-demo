import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import useWindowSize from '../../../hooks/useWindowSize'
import data from '../../../data/data'
import popup from '../../../assets/order/icon_18_popup.png'

const ChooseExtraOption = props => {
  const windowSize = useWindowSize()
  const { setOption, setPlan, plan, option } = props
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
        result += item
      })
      return result
    }
    return array
  }

  const chooseOption = (theOption, index) => {
    const result = JSON.parse(JSON.stringify(optionActive))

    // check if this option is chosen
    if (
      optionActive[index].text.length !== 0 &&
      theOption.text[0] === optionActive[index].text[0] &&
      theOption.text[1] === optionActive[index].text[1]
    ) {
      result[index] = { text: [], value: 0 }
      setOptionActive(result)
      setOption(result)
      // countPrice([{ index: 2, value: result }])
      return
    }

    // limited option
    // get result
    result[index] = { ...theOption }
    if (
      theOption.text[0] === data.homePage.simulation.option[0].text[0] ||
      theOption.text[0] === data.homePage.simulation.option[1].text[0] ||
      theOption.text[0] === data.homePage.simulation.option[2].text[0]
    ) {
      const newPart1 = {
        text: data.homePage.simulation.simType[0].text,
        value: data.homePage.simulation.simType[0].value
      }
      plan.sim = newPart1
      setPlan(plan)
      setOptionActive(result)
      setOption(result)
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
        <div
          className='col-12 row justify-content-center mx-0'
          key={choice.text[0]}
        >
          <div
            className={classNames(
              'col-12 bg-white border border-primary rounded my-3',
              'extra-option',
              { 'px-3 py-4': windowSize.width >= 576 },
              { 'py-0 pr-0': windowSize.width < 576 }
            )}
            onClick={event => {
              event.preventDefault()
              chooseOption(choice, index)
            }}
            aria-hidden='true'
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
              onChange={() => {}}
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
              {choice.text.map(item => {
                return (
                  <span className='font-weight-bold' key={item}>
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
        for (let i = 0; i < 3; i += 1) {
          optionResult[i] = { text: [], value: 0 }
        }
        setOptionActive(optionResult)
      }
    }
  }

  useEffect(() => {
    checkSim(plan.sim)
    // eslint-disable-next-line
  }, [plan.sim])
  useEffect(() => {
    setOptionActive(option)
    // eslint-disable-next-line
  }, [option])

  return (
    <div className='container'>
      {optionButton(data.homePage.simulation.option, optionActive)}
      <div className='lm-note ml-4'>価格表示はすべて「税抜き」です。</div>
    </div>
  )
}

ChooseExtraOption.propTypes = {
  plan: PropTypes.objectOf(PropTypes.object).isRequired,
  option: PropTypes.arrayOf(PropTypes.object).isRequired,
  setOption: PropTypes.func.isRequired,
  setPlan: PropTypes.func.isRequired
}

export default ChooseExtraOption
