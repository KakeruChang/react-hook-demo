import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import data from '../../../data/data'
import { useWindowSize } from '../../../hooks/useWindowSize'

const ChoosePlan = props => {
  const windowSize = useWindowSize()
  const [simActive, setSimActive] = useState({ text: '-', value: 0 })
  const [dataActive, setDataActive] = useState({
    value: 0,
    data: '-',
    game: '-',
    star: '-'
  })

  useEffect(() => {
    if (!props.plan.sim.value) {
      setSimActive({ text: '-', value: 0 })
      return
    }
    setSimActive(props.plan.sim)
  }, [props.plan.sim])
  useEffect(() => {
    if (!props.plan.data.value) {
      setDataActive({ value: 0, data: '-', game: '-', star: '-' })
      return
    }
    setDataActive(props.plan.data)
  }, [props.plan.data])

  const chooseSim = sim => {
    setSimActive({ text: sim.text, value: sim.value })
    props.setPlan({
      sim: { text: sim.text, value: sim.value },
      data: {
        value: props.plan.data.value,
        data: props.plan.data.data,
        game: props.plan.data.game,
        star: props.plan.data.star
      }
    })
  }
  const choosePlan = event => {
    const planPrice = parseInt(event.target.value, 10)
    // const index = event.target.selectedIndex
    // console.log(event.target[index].text)
    setDataActive({
      value: planPrice,
      data: countData(planPrice)[0],
      game: countData(planPrice)[1],
      star: countData(planPrice)[2]
    })
    props.setPlan({
      sim: simActive,
      data: {
        value: planPrice,
        data: countData(planPrice)[0],
        game: countData(planPrice)[1],
        star: countData(planPrice)[2]
      }
    })
  }
  const countData = price => {
    switch (price) {
      case 970:
        return [10, 1, 0]
      case 1020:
        return [20, 3, 1]
      default:
        return ['-', '-', '-']
    }
  }

  const simButton = (list, active) => {
    return list.map((choice, index) => {
      return (
        <div
          className='col-lg-4 col-12 row justify-content-center m-0 p-0'
          key={index}
        >
          <div className='col-12  m-4'>
            <button
              className={classNames('simu-area', {
                'simu-area-checked': choice.text === active.text
              })}
              onClick={event => {
                event.preventDefault()
                chooseSim(choice)
              }}
            >
              <input
                className={classNames('mb-2', {
                  'mr-5': windowSize.width > 576
                })}
                type='radio'
                name='first-part'
                id={`simu1${index}`}
                value={choice.text}
                onChange={event => {}}
                checked={choice.text === active.text}
              />
              <label
                htmlFor={`simu1${index}`}
                className={classNames({
                  'font-14': windowSize.width > 991 && windowSize.width < 1200
                })}
              >
                {choice.text}
              </label>
              {/* <img src={choice.img} className='chooseplan-sim-img' alt='' /> */}
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
        defaultValue={props.plan.data.value || 'default'}
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

  const planTable = () => {
    if (windowSize.width >= 992) {
      return (
        <table className='table table-bordered table-choose-plan'>
          <thead className='thead-primary'>
            <tr>
              <th scope='col'>利用できる機能</th>
              <th scope='col'>データ通信容量</th>
              <th scope='col'>ゲーム連携数</th>
              <th scope='col'>獲得スター数</th>
              <th scope='col'>プラン料金</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='font-13'>{simActive.text}</td>
              <td className='h5'>{dataActive.data}GB</td>
              <td className='font-13'>{dataActive.game}つ</td>
              <td className='font-13'>{dataActive.star}個</td>
              <td>
                <span className='h5 text-danger'>
                  {simActive.value + dataActive.value}円
                </span>
                <span className='font-13'>/月額</span>
              </td>
            </tr>
          </tbody>
        </table>
      )
    }
    return (
      <table className='table table-bordered table-choose-plan'>
        <tbody>
          <tr>
            <th scope='col'>利用できる機能</th>
            <td className='font-13'>{simActive.text}</td>
          </tr>
          <tr>
            <th scope='col'>データ通信容量</th>
            <td className='h5'>{dataActive.data}GB</td>
          </tr>
          <tr>
            <th scope='col'>ゲーム連携数</th>
            <td className='font-13'>{dataActive.game}つ</td>
          </tr>
          <tr>
            <th scope='col'>獲得スター数</th>
            <td className='font-13'>{dataActive.star}個</td>
          </tr>
          <tr>
            <th scope='col'>プラン料金</th>
            <td>
              <span className='h5 text-danger'>
                {simActive.value + dataActive.value}円
              </span>
              <span className='font-13'>/月額</span>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className='container'>
      <div className='lm-title border-primary'>利用する機能を選ぶ</div>
      <div className='row justify-content-start m-0 p-0'>
        {simButton(data.homePage.simulation.simType, simActive)}
      </div>
      <div className='lm-title border-primary'>データ通信容量を選ぶ</div>
      <div className='m-3'>{selectList(data.homePage.simulation.plan)}</div>
      <div className='lm-title border-primary'>選択したプラン内容</div>
      <div className='m-3'>{planTable()}</div>
    </div>
  )
}

export default ChoosePlan
