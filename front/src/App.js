import React, { Component, useState } from "react";
import './App.css';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import Login from './components/Login'
import { Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register'
import Authenticate from './components/Authenticate'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ?
          <>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="settings">Settings</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<Dashboard />}></Route>
              <Route path="/login" element={<Settings />}></Route>
            </Routes>
          </>
          :
          <>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">sign up</Link>
                </li>
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="settings">Settings</Link>
                </li>
              </ul>
            </nav> */}
            <Authenticate />
          </>
        }
      </div>
    )
  }

}

export default App;