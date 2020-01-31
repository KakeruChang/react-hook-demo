import React from 'react'
import { Redirect } from 'react-router'
import HomePage from '../components/HomePage/HomePage'
import MyPage from '../components/MyPage/Mypage'
import Login from '../components/Login'
import Order from '../components/Order/Order'
import SelectPlan from '../components/Order/SelectPlan'

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
        path: '/order/selectplan',
        component: SelectPlan
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
    component: () => <Redirect to='/' />
  }
]

export default routes
