import React, { useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

import OrderTitle from './OrderTitle'
import logo from '../../assets/icon_logo.png'
import '../../scss/order.scss'

const Order = props => {
  const [plan, setPlan] = useState({
    sim: { text: '-', value: 0 },
    data: { value: 0, data: '-', game: '-', star: '-' }
  })
  const [option, setOption] = useState([
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 },
    { text: [], value: 0 }
  ])
  const [apply, setApply] = useState({
    order: {},
    info: {
      firstname: '',
      lastname: '',
      birthYear: 0,
      birthMonth: 0,
      birthDay: 0,
      sex: '',
      address: '',
      phone: '',
      email: '',
      password: ''
    }
  })

  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </nav>
      <div className='container-order'>
        <OrderTitle path={props.location.pathname} />
        {renderRoutes(props.route.routes, {
          apply,
          setApply,
          plan,
          setPlan,
          option,
          setOption
        })}
      </div>
    </>
  )
}

export default Order
