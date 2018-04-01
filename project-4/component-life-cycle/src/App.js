import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component-life-cycle</h1>
        </header>
        <Body />
      </div>
    );
  }
}
class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      random:0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber(){
    console.log('Random Number Called-');
    this.setState({random:Math.floor(Math.random()*100)})
  }
  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>RandomNumber</button>
        <Numbers  myNumber={this.state.random}/>
      </div>
    );
  }
}

class Numbers extends Component {
componentWillMount(){
  console.log('componentWillMount called');
}
componentDidMount(){
  console.log('componentDidMount called');
}
componentWillReceiveProps(newProps){
  console.log('componentWillReceiveProps called');
}
shouldComponentUpdate(newProps,nextState){
  console.log('called should component update');
  return true;
}
componentWillUpdate(newProps,nextState){
  console.log('called component will update');
}
componentDidUpdate(newProps,nextState){
  console.log('called component Did update');
}
componentWillUnmount(){
  console.log('Called ComponentWill unMount');
}
  render(){
    return(
      <div>
        <br />
       {this.props.myNumber}
      </div>
    );
  }
}

export default App;
