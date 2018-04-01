import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.yourName = "dafney";
      this.state = {};

  }
sayHello(name){
  return "hello " + name;
}

  render() {
    const Myname = "shravan";
    return (
      <div className="App">
      <h2> Just some sample Data:{Myname}</h2>
        <h2> Just some sample Data:{this.sayHello('shravan')}</h2>
          <h2> Just some sample Data:{this.yourName}</h2>


      </div>
    );
  }
}

export default App;
