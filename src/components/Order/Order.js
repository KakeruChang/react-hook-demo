import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

import OrderTitle from './OrderTitle'
import logo from '../../assets/icon_logo.png'
import '../../scss/order.scss'

const Order = props => {
  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </nav>
      <div className='container-order'>
        <OrderTitle path={props.location.pathname} />
        {renderRoutes(props.route.routes)}
      </div>
    </>
  )
}

export default Order
