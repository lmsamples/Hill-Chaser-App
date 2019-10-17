import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Hill Chaser<br />
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/running">Run</Link></li>
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <li><Link className="nav-link" to="/register">Register</Link></li>
            <li><Link className="nav-link" to="/logout"
            {...localStorage.clear("activeuser")}>
              Logout
              </Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;