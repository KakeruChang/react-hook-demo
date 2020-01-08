import React, { useContext } from 'react'
import test from '../../hooks/HookContext'
import Carousel from './Carousel'

const HomePage = () => {
  const { isActive } = useContext(test)
  return (
    <div>
      <Carousel />
      {isActive}
    </div>
  )
}

export default HomePage
