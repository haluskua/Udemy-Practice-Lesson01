import React, { Component }from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component  {
  state = {
    username: 'supermax'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value
    })
  }
  render () {
  return (
    <div className="App">
      <h1>hello</h1>
      <UserInput changed={this.usernameChangedHandler}
      currentName={this.state.username} />
      <UserOutput userName ={this.state.username} />
      <UserOutput userName ={this.state.username} />
      <UserOutput userName={"Ompa"} />
    </div>
  );
  }
}

export default App;
