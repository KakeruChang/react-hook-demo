import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

const Order = props => {
  return (
    <div>
      <h1>order</h1>
      <Link to='/order/selectplan'>test</Link>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default Order
