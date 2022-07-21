import React, { useEffect, useState } from 'react'
import AppRoute from './routes'
import './assets/tailwind.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header'
import CONFIG from './config'
import { connect } from 'react-redux'
import { APP_LOAD, REDIRECT } from './redux/constants/actionTypes'
import agent from './agent'

const mapStateToProps = state => {
  return {
    appLoaded: true,
    appname: state.common.appname,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token }),
  onRedirect: () => dispatch({ type: REDIRECT })
})

function App(props) {
  useEffect(() => {
    let token = window.localStorage.getItem('jwt') || null
    token && agent.setToken(token)
    const data = token && agent.Auth.current()
    data &&
      data.then(res => {
        props.onLoad(res, res.user.token, token)
      })
  }, [])

  if (props.appLoaded) {
    return (
      <>
        <Router basename={CONFIG.baseUrl}>
          <Header
            appname={props.appname}
            currentUser={props.currentUser}
          />
          <AppRoute />
        </Router>
      </>
    )
  }
  return (
    <Router basename={CONFIG.baseUrl}>
      <Header
        appname={props.appname}
        currentUser={props.currentUser}
      />
    </Router>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
