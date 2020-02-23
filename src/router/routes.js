import React from 'react'
import { Redirect } from 'react-router'
import HomePage from '../components/HomePage/HomePage'
import MyPage from '../components/MyPage/Mypage'
import Login from '../components/Login'
import Order from '../components/Order/Order'
import BeforeOrder from '../components/Order/BeforeOrder'
import SelectPlan from '../components/Order/SelectPlan'
import InformationInput from '../components/Order/InformationInput'
import CheckOrder from '../components/Order/CheckOrder'
import CompleteOrder from '../components/Order/CompleteOrder'

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
    // breadcrumbName: data.jp.index.name
  },
  {
    path: '/mypage',
    requiresAuth: true,
    // render: props =>
    //   isUserLoggedIn(props) ? <MyPage /> : <Redirect to='/login' />
    component: MyPage
    // breadcrumbName: data.jp.index.name
  },
  {
    path: '/order',
    component: Order,
    routes: [
      {
        path: '/order',
        exact: true,
        component: BeforeOrder
      },
      {
        path: '/order/selectplan',
        component: SelectPlan
      },
      {
        path: '/order/informationinput',
        component: InformationInput
      },
      {
        path: '/order/checkorder',
        component: CheckOrder
      },
      {
        path: '/order/completeorder',
        component: CompleteOrder
      },
      {
        path: '*',
        exact: true,
        component: () => {
          return <Redirect to='/' />
        }
      }
    ]
  },
  //   {
  //     path: '/mypage',
  //     component: Cure,
  //     // breadcrumbName: data.jp.cure.name
  //   },
  {
    path: '/login',
    component: Login
    // breadcrumbName: data.jp.information.name
  },
  {
    path: '*',
    exact: true,
    component: () => {
      return <Redirect to='/' />
    }
  }
]

export default routes
