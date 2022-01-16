import React, { Component } from "react";
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}

export default App;