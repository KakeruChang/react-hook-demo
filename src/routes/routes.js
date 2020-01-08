import React from 'react'
import HomePage from '../components/HomePage/HomePage'
import { Redirect } from 'react-router'

const routes = [
  {
    path: '/',
    component: HomePage
    //exact: true,
  },
  {
    path: '*',
    exact: true,
    component: () => <Redirect to='/' />
  }
]
// const routes = [
//   {
//     path: '/index',
//     component: Home,
//     //exact: true,
//     breadcrumbName: data.jp.index.name
//   },
//   {
//     path: '/cure',
//     component: Cure,
//     breadcrumbName: data.jp.cure.name
//   },
//   {
//     path: '/information',
//     component: Information,
//     breadcrumbName: data.jp.information.name
//   },
//   {
//     path: '/column',
//     component: Column,
//     breadcrumbName: data.jp.column.name
//   },
//   {
//     path: '*',
//     exact: true,
//     component: () => <Redirect to='/index' />
//   }
// ]

export default routes
