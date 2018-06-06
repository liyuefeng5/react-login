import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AntLogin from './components/AntLogin'

class App extends Component {

	constructor(props) {
			super(props)
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
		
				<AntLogin />
      </div>
    );
  }
}

export default App;
