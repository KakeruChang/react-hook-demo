import React, { useState } from 'react'

import '../../scss/homePage.scss'

import kira from '../../assets/homePage/simulation/icon_kira.png'
import calculator from '../../assets/homePage/simulation/icon_calculator.png'
import data from '../../constants/data'

const Simulation = () => {
  const [part1Active, setPart1Active] = useState({ text: '', value: 0 })
  const [part3Active, setPart3Active] = useState({ text: '', value: 0 })
  const [price, setPrice] = useState(0)

  const chooseSim = sim => {
    if (part1Active.text != '' && sim.text === part1Active.text) {
      setPart1Active({ text: '', value: 0 })
      countPrice(0, null)
      return
    }
    setPart1Active({ text: sim.text, value: sim.value })
    countPrice(0, sim.value)
  }

  const chooseOption = option => {
    if (
      part3Active.text != '' &&
      option.text[0] === part3Active.text[0] &&
      option.text[1] === part3Active.text[1]
    ) {
      setPart3Active({ text: [], value: 0 })
      countPrice(2, null)
      return
    }
    setPart3Active({ text: option.text, value: option.value })
    countPrice(2, option.value)
  }

  const arrayToString = array => {
    if (typeof array === Object) {
      let result = ''
      array.forEach(item => {
        result = result + item
      })
      return result
    }
    return array
  }

  const countPrice = (index, value) => {
    if (!value) {
      setPrice(0)
      return
    }

    let result = 0
    let countArray = [part1Active.value, 0, part3Active.value]

    countArray[index] = value
    countArray.forEach(i => {
      result = result + i
    })
    setPrice(result)
  }

  const simuButton = (list, funcClick, part, name) => {
    return list.map((choice, index) => {
      return (
        <div className='col-lg-4 col-12 row justify-content-center' key={index}>
          <button
            className='col-12  m-4 simu-area'
            onClick={() => {
              funcClick(choice)
            }}
          >
            <input
              className='mb-2 mr-2'
              type='radio'
              name={name}
              id={`inlineRadio1${index}`}
              value={choice.text}
              onChange={event => {}}
              checked={choice.text === arrayToString(part.text)}
            />
            <label htmlFor='inlineRadio1'>
              {choice.text}(checked?:
              {choice.text === arrayToString(part.text) ? 'true' : 'false'})
            </label>
          </button>
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
        <div className='simu-first-part p-5'>
          <p>{data.homePage.simulation.title[0]}</p>
          <div className='row justify-content-between'>
            {simuButton(
              data.homePage.simulation.simType,
              chooseSim,
              part1Active,
              'first-part'
            )}
            　
          </div>
        </div>
        <div className='simu-second-part'>
          <p>{data.homePage.simulation.title[1]}</p>
        </div>
        <div className='simu-third-part p-5'>
          <p>{data.homePage.simulation.title[2]}</p>
          <div className='row justify-content-between'>
            {simuButton(
              data.homePage.simulation.option,
              chooseOption,
              part3Active,
              'thirdPart'
            )}
          </div>
        </div>
        <div className='h1 text-danger'>{price}元</div>
      </div>
    </div>
  )
}

export default Simulation
