import React from 'react'
import { Link } from 'react-router-dom'

const CheckOrder = () => {
  return (
    <div>
      <h1>CheckOrder</h1>
      <Link to='/order/completeorder'>completeorder</Link>
    </div>
  )
}

export default CheckOrder
