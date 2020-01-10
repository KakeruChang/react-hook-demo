import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../scss/homePage.scss'
import data from '../../constants/data'

const MainMenu = () => {
  const [dataMainMenu, setDataMainMenu] = useState(data.homePage.mainMenu)

  const hoverMenu = index => {
    let origin = JSON.parse(JSON.stringify(data.homePage.mainMenu))

    if (index || index === 0) {
      origin[index].isHover = true
      setDataMainMenu(origin)
    } else {
      setDataMainMenu(data.homePage.mainMenu)
    }
  }

  const textList = menu => {
    let list = menu.content
    let highLightColor = ''

    if (menu.isHover) {
      list = menu.contentHover
      highLightColor = 'danger'
    } else {
      highLightColor = 'primary'
    }

    return list.map((text, index) => {
      if (text.highLight) {
        return (
          <span
            className={`h5 font-weight-bolder text-${highLightColor}`}
            key={index}
          >
            {text.text}
          </span>
        )
      }
      return (
        <p className='card-text text-dark' key={index}>
          {text.text}
        </p>
      )
    })
  }

  const menu = dataMainMenu.map((item, index) => {
    return (
      <div className='col-lg-3 col-md-6 col-12 mb-4' key={index}>
        <Link to='/' className='text-decoration-none'>
          <div className='card h-100'>
            <div className='card-body row justify-content-center pb-0 mx-0 bg-light'>
              <div
                className='row justify-content-center p-0 m-0'
                onMouseEnter={() => {
                  hoverMenu(index)
                }}
                onMouseLeave={() => {
                  hoverMenu(null)
                }}
              >
                {textList(item)}
              </div>
              <div className='align-self-end'>
                <img src={item.img} className='img-fluid' alt='' />
              </div>
            </div>
            <div className='card-footer text-center bg-primary text-light main-menu-footer-arrow '>
              <span className='text-light font-weight-bolder'>
                {item.footerText}
              </span>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <div className='container'>
      <div className='row my-4'>{menu}</div>
    </div>
  )
}

export default MainMenu
