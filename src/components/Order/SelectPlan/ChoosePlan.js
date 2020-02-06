import React, { useState } from 'react'
import classNames from 'classnames'

// import '../../../scss/common.scss'
// import '../../../scss/order.scss'
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

  const chooseSim = sim => {
    console.log(sim)
    // const part3Result = JSON.parse(JSON.stringify(part3Active))
    // // check if this sim is chosen
    // if (part1Active.text !== '' && sim.text === part1Active.text) {
    //   const blankPart3 = [
    //     { text: [], value: 0 },
    //     { text: [], value: 0 },
    //     { text: [], value: 0 },
    //     { text: [], value: 0 },
    //     { text: [], value: 0 }
    //   ]
    //   console.log('sim1')
    //   setPart1Active({ text: '', value: 0 })
    //   setPart3Active(blankPart3)
    //   countPrice([
    //     { index: 0, value: 0 },
    //     { index: 2, value: blankPart3 }
    //   ])
    //   return
    // }
    // // limited Sim
    // // choose 2nd or 3rd plan
    // if (
    //   sim.text === data.homePage.simulation.simType[1].text ||
    //   sim.text === data.homePage.simulation.simType[2].text
    // ) {
    //   // choose 1st or 2nd or 3rd option
    //   if (
    //     part3Active[0].text.length !== 0 ||
    //     part3Active[1].text.length !== 0 ||
    //     part3Active[2].text.length !== 0
    //   ) {
    //     console.log('sim2')
    //     // reset 1st or 2nd or 3rd option
    //     for (let i = 0; i < 3; i++) {
    //       part3Result[i] = { text: [], value: 0 }
    //     }
    //   }
    // }
    // countPrice([
    //   { value: sim.value, index: 0 },
    //   { value: part3Result, index: 2 }
    // ])
    setSimActive({ text: sim.text, value: sim.value })
    // setPart3Active(part3Result)
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
    // countPrice([{ index: 1, value: planPrice }])
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
        return [100, 1, 0]
      case 1020:
        return [200, 3, 1]
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
              <td className='h5'>{dataActive.data}MB</td>
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
            <td className='h5'>{dataActive.data}MB</td>
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
