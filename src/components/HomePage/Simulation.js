import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
//import ChooseSimButton from './Simulation/ChooseSimButton'

import { useWindowSize } from '../../hooks/useWindowSize'
import kira from '../../assets/homePage/simulation/icon_kira.png'
import calculator from '../../assets/homePage/simulation/icon_calculator.png'
import hen from '../../assets/homePage/simulation/form-result-img02.png'
import cock from '../../assets/homePage/simulation/form-result-img01.png'
import data from '../../data/data'

const Simulation = () => {
  const [part1Active, setPart1Active] = useState({ text: '', value: 0 })
  const [part2Active, setPart2Active] = useState({ value: 0 })
  const [part3Active, setPart3Active] = useState([
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 }
  ])
  const [price, setPrice] = useState(0)
  const windowSize = useWindowSize()

  const chooseSim = sim => {
    const part3Result = JSON.parse(JSON.stringify(part3Active))

    // check if this sim is chosen
    if (part1Active.text !== '' && sim.text === part1Active.text) {
      const blankPart3 = [
        { text: [], value: 0 },
        { text: [], value: 0 },
        { text: [], value: 0 },
        { text: [], value: 0 },
        { text: [], value: 0 }
      ]
      console.log('sim1')
      setPart1Active({ text: '', value: 0 })
      setPart3Active(blankPart3)
      countPrice([
        { index: 0, value: 0 },
        { index: 2, value: blankPart3 }
      ])
      return
    }

    // limited Sim
    // choose 2nd or 3rd plan
    if (
      sim.text === data.homePage.simulation.simType[1].text ||
      sim.text === data.homePage.simulation.simType[2].text
    ) {
      // choose 1st or 2nd or 3rd option
      if (
        part3Active[0].text.length !== 0 ||
        part3Active[1].text.length !== 0 ||
        part3Active[2].text.length !== 0
      ) {
        console.log('sim2')
        // reset 1st or 2nd or 3rd option
        for (let i = 0; i < 3; i++) {
          part3Result[i] = { text: [], value: 0 }
        }
      }
    }
    countPrice([
      { value: sim.value, index: 0 },
      { value: part3Result, index: 2 }
    ])
    setPart1Active({ text: sim.text, value: sim.value })
    setPart3Active(part3Result)
  }

  const choosePlan = event => {
    const planPrice = parseInt(event.target.value, 10)
    setPart2Active({ value: planPrice })
    countPrice([{ index: 1, value: planPrice }])
  }

  const chooseOption = (option, index) => {
    console.log('chooseOption')
    const result = JSON.parse(JSON.stringify(part3Active))

    // check if this option is chosen
    if (
      part3Active[index].text.length !== 0 &&
      option.text[0] === part3Active[index].text[0] &&
      option.text[1] === part3Active[index].text[1]
    ) {
      console.log('check if this option is chosen')
      result[index] = { text: [], value: 0 }
      setPart3Active(result)
      countPrice([{ index: 2, value: result }])
      return
    }

    // limited option
    // get result
    result[index] = Object.assign({}, option)
    if (
      option.text[0] === data.homePage.simulation.option[0].text[0] ||
      option.text[0] === data.homePage.simulation.option[1].text[0] ||
      option.text[0] === data.homePage.simulation.option[2].text[0]
    ) {
      const newPart1 = {
        text: data.homePage.simulation.simType[0].text,
        value: data.homePage.simulation.simType[0].value
      }
      setPart1Active(newPart1)
      setPart3Active(result)
      countPrice([
        { value: newPart1.value, index: 0 },
        { value: result, index: 2 }
      ])
      return
    }

    // common option
    setPart3Active(result)
    countPrice([{ value: result, index: 2 }])
  }

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
  // const testCheck = (a, b) => {
  //   console.log(`test:a-${a}`)
  //   console.log(`test:b-${b}`)
  //   console.log(`test:ab-${a === b}`)
  //   return a === b
  // }

  const constOptionPrice = price => {
    let optionPrice = 0
    let options = JSON.parse(JSON.stringify(price))

    options.forEach(option => {
      optionPrice = optionPrice + option.value
    })
    return optionPrice
  }

  // const countPrice = (index, value) => {
  const countPrice = renewArray => {
    console.log(renewArray)
    // cancel choose plan
    // if (!value) {
    //   setPrice(0)
    //   return
    // }

    let result = 0
    let countArray = [part1Active.value, part2Active.value, part3Active]
    // countArray[index] = value
    renewArray.forEach(renew => {
      countArray[renew.index] = renew.value
    })
    console.log(countArray)
    countArray.forEach(price => {
      if (typeof price === 'object' && price.length) {
        result = result + constOptionPrice(price)
        console.log(`if：${constOptionPrice(price)}`)
      } else {
        result = result + price
      }
      console.log(`result:${result}`)
    })
    setPrice(result)
  }

  const simu1Button = (list, funcChoose, part, name, type) => {
    return list.map((choice, index) => {
      return (
        <div className='col-lg-4 col-12 row justify-content-center' key={index}>
          <div className='col-12  m-4'>
            <button
              className={classNames('simu-area', {
                'simu-area-checked': choice.text === arrayToString(part.text)
              })}
              onClick={event => {
                event.preventDefault()
                funcChoose(choice)
              }}
            >
              <input
                className={classNames('mb-2', {
                  'mr-5': windowSize.width > 576
                })}
                type={type}
                name={name}
                id={`simu1${index}`}
                value={choice.text}
                onChange={event => {}}
                checked={choice.text === arrayToString(part.text)}
              />
              <label
                htmlFor={`simu1${index}`}
                className={classNames({
                  'font-14': windowSize.width > 991 && windowSize.width < 1200
                })}
              >
                {choice.text}
              </label>
            </button>
          </div>
        </div>
      )
    })
  }

  const selectList = list => {
    return (
      <select
        className='form-control'
        defaultValue='default'
        onChange={choosePlan}
      >
        {list.map((item, index) => {
          if (item.value) {
            return (
              <option value={item.value} key={index}>
                {item.text}
              </option>
            )
          } else {
            return (
              <option value='default' disabled key={index}>
                {item.text}
              </option>
            )
          }
        })}
      </select>
    )
  }

  const simu3Button = (list, funcChoose, part, name, type) => {
    return list.map((choice, index) => {
      return (
        <div className='col-lg-4 col-12 row justify-content-center' key={index}>
          <div className='col-12  m-4'>
            <button
              className={classNames(
                'simu-area',
                { 'px-3': windowSize.width >= 576 },
                {
                  'simu-area-checked':
                    arrayToString(choice.text) ===
                    arrayToString(part[index].text)
                }
              )}
              onClick={event => {
                event.preventDefault()
                funcChoose(choice, index)
              }}
            >
              <input
                className='mb-2 mr-2'
                type={type}
                name={name}
                id={`simu3${index}`}
                value={choice.text}
                onChange={event => {}}
                checked={
                  arrayToString(choice.text) === arrayToString(part[index].text)
                }
              />

              <label htmlFor={`simu3${index}`}>
                {choice.text.map((item, index) => {
                  return <div key={index}>{item}</div>
                })}
              </label>
            </button>
          </div>
        </div>
      )
    })
  }
  return (
    <div className='bg-primary p-4'>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <div>
            <img src={kira} className='img-fluid' alt='' />
          </div>
          <div className=' row justify-content-center text-light text-center'>
            <div className='col-12 h3'>＼やってみよう！／</div>
            <div className='col-12 h1'>かんたん料金シミュレーション</div>
          </div>
          <div>
            <img src={calculator} className='img-fluid' alt='' />
          </div>
        </div>
        <div
          className={classNames(
            'simu-first-part',
            { 'p-5': windowSize.width >= 576 },
            { 'py-3 pl-4': windowSize.width < 576 }
          )}
        >
          <div>
            <img
              className='pr-2'
              src={data.homePage.simulation.titleImg[0]}
              alt=''
            />
            <span className='simu-title-text'>
              {data.homePage.simulation.title[0]}
            </span>
          </div>
          <div className='row justify-content-start'>
            {simu1Button(
              data.homePage.simulation.simType,
              chooseSim,
              part1Active,
              'first-part',
              'radio'
            )}
          </div>
        </div>
        <div
          className={classNames(
            'simu-second-part',
            { 'p-5': windowSize.width >= 576 },
            { 'p-4': windowSize.width < 576 }
          )}
        >
          <div className='mb-4'>
            <img
              className='pr-2'
              src={data.homePage.simulation.titleImg[1]}
              alt=''
            />
            <span className='simu-title-text'>
              {data.homePage.simulation.title[1]}
            </span>
          </div>
          <div className='mb-4'>
            {selectList(data.homePage.simulation.plan)}
          </div>
        </div>
        <div
          className={classNames(
            'simu-third-part pt-5 pb-1',
            { 'px-5': windowSize.width >= 576 },
            { 'pl-4': windowSize.width < 576 }
          )}
        >
          <div>
            <img
              className='pr-2'
              src={data.homePage.simulation.titleImg[2]}
              alt=''
            />
            <span className='simu-title-text'>
              {data.homePage.simulation.title[2]}
            </span>
          </div>
          <div className='row justify-content-start'>
            {simu3Button(
              data.homePage.simulation.option,
              chooseOption,
              part3Active,
              'thirdPart',
              'checkbox'
            )}
          </div>
          <div className='h3 text-center text-primary'>
            シミュレーション結果はこちら
          </div>
        </div>
        <div className='simulation-result'>
          <div className='inner d-flex justify-content-center py-4'>
            <div className='text-center'>
              <div className=''>
                <span className='h3 text-danger'>月々</span>
                <span className='h1 text-danger'>{price}</span>
                <span className='h3 text-dark'>元</span>
              </div>
              <div>※価格表示はすべて「税抜き」です。</div>
              <div>
                <Link to='#' className='text-decoration-none text-primary'>
                  詳しい料金はこちら
                </Link>
              </div>
            </div>
            <img src={cock} className='img-fluid img-cock' alt='' />
            <img src={hen} className='img-fluid img-hen' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Simulation
