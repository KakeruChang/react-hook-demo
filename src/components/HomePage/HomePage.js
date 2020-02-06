import React from 'react'

import Carousel from './Carousel'
import MainButton from './MainButton'
import MainMenu from './MainMenu'
import Simulation from './Simulation'
import '../../scss/homePage.scss'

const HomePage = () => {
  return (
    <>
      <Carousel />
      <MainButton />
      <MainMenu />
      <Simulation />
    </>
  )
}

export default HomePage
