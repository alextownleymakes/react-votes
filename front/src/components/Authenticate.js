import React, { Component, useState } from "react";
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Register from './Register'
import Login from './Login'

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
            <Routes>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
      </div>
    )
  }

}

export default App;