import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'

const renderRoutesWithAuth = (
  routes,
  auth,
  authPath = '/login',
  extraProps = {},
  switchProps = {}
) => {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        return (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              if (!route.requiresAuth || auth || route.path === authPath) {
                return (
                  <route.component
                    {...props}
                    {...extraProps}
                    route={route}
                    auth={auth}
                  />
                )
              }
              return (
                <Redirect
                  to={{ pathname: authPath, state: { from: props.location } }}
                />
              )
            }}
          />
        )
      })}
    </Switch>
  ) : null
}

renderRoutesWithAuth.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired
}

export default renderRoutesWithAuth
