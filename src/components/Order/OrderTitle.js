import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import data from '../../data/data'
import constants from '../../data/constants'
import useWindowSize from '../../hooks/useWindowSize'
// import '../../scss/order.scss'

const OrderTitle = props => {
  const { path } = props
  const windowSize = useWindowSize()
  const breakPoint = constants.order.titleBreakPoint
  const adjustFor320PX = 768
  const { title } = data.order
  const [orderActive, setOrderActive] = useState(title[0].name)

  const changeActive = pathActive => {
    switch (pathActive) {
      case '/order':
        setOrderActive('BeforeOrder')
        break
      case '/order/selectplan':
        setOrderActive('SelectPlan')
        break
      case '/order/informationinput':
        setOrderActive('InformationInput')
        break
      case '/order/checkorder':
        setOrderActive('CheckOrder')
        break
      case '/order/completeorder':
        setOrderActive('CompleteOrder')
        break
      default:
        break
    }
  }

  useEffect(() => {
    changeActive(path)
  }, [path])

  return (
    <div className='container'>
      <div className='row justify-content-between mt-5'>
        <div className='border-right-empty'>
          <span />
        </div>
        {title.map(item => {
          return (
            <div
              className={classNames(
                { col: windowSize.width >= breakPoint },
                {
                  'col-8':
                    item.name === orderActive && windowSize.width < breakPoint
                },
                {
                  'col-1':
                    item.name !== orderActive && windowSize.width < breakPoint
                },
                {
                  'p-1': windowSize.width < adjustFor320PX
                }
              )}
              key={item.index}
            >
              <div
                className={classNames(
                  'border-top border-bottom py-2 d-flex justify-content-center order-item',
                  {
                    'bg-primary text-light': item.name === orderActive
                  },
                  { 'border-right': item.index === title.length },
                  { 'border-left': item.index === 1 }
                )}
              >
                {item.index !== 1 && (
                  <span className='order-before order-arrow'>
                    <span className='inactive' />
                  </span>
                )}
                <span className='order-item-index'>{item.index}</span>
                {(windowSize.width >= breakPoint ||
                  item.name === orderActive) && (
                  <span className='ml-2'>{item.text}</span>
                )}
                {item.name === orderActive && (
                  <img src={item.img} className='order-item-img ' alt='' />
                )}
                {item.index !== title.length && (
                  <span className='order-after  order-arrow'>
                    <span
                      className={classNames(
                        { active: item.name === orderActive },
                        { inactive: item.name !== orderActive }
                      )}
                    />
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

OrderTitle.propTypes = {
  path: PropTypes.string.isRequired
}

export default OrderTitle
