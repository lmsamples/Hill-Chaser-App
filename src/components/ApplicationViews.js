import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import RunList from './running/RunList'
import Login from './login/login'
import Register from './login/register'
class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* home */}
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* run home */}
        <Route path="/running" render={(props) => {
          return <RunList {...props}/>
        }} />
        {/* login */}
        <Route path="/login" render={(props) => {
          return <Login {...props}/>
        }} />
        {/* register */}
        <Route path="/register" render={(props) => {
          return <Register {...props}/>
        }} />
        {/* logout */}
        <Route path="/logout" render={props => {
          return <Home {...props} />;
        }}/>
      </React.Fragment>
    )
  }
}

export default ApplicationViews