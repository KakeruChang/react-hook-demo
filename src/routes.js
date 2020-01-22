import React from 'react'
import { Redirect } from 'react-router'
import HomePage from './components/HomePage/HomePage'
import MyPage from './components/MyPage/Mypage'
import Login from './components/Login'

const isUserLoggedIn = props => {
  // if it is null ,it won't be redirected
  if (props.isLoggined === false) {
    return false
  }
  return true
}
const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
    // breadcrumbName: data.jp.index.name
  },
  {
    path: '/mypage',
    render: props =>
      isUserLoggedIn(props) ? <MyPage /> : <Redirect to='/login' />

    // component: MyPage
    // breadcrumbName: data.jp.index.name
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
