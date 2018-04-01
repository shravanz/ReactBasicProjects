import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prop number is :{this.props.propNumber}</h3>
          <h3>prop object is :{this.props.propObject.obj1}</h3>
            <h3>prop String is :{this.props.propString}</h3>

        <Parent />
      </div>
    );
  }
}

App.propType = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps ={
  propNumber:3,
  propString:"This is prop String",
  propObject:{
    obj1: "this is Obj 1",
    obj2: "this is Obj 2"

  }
}

class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars:['s-BMW','s-MERC','s-City','s-Audi']
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({cars:this.state.cars.reverse()})
  }
  render(){
    return(
      <div>
        <h2 onClick={this.handleClick}>Just Some Info</h2>
        <Cars  msg="Cars are Kool" model="1234" coolCars={this.state.cars}/>
      </div>
    );
  }
}
Parent.defaultProps = {
  cars:['BMW','MERC','City','Audi']
}

class Cars extends Component {
  render(){
    return(
      <div>
        <h3>Iam from Car Component</h3>
        <p>{this.props.msg}</p>
          <p>{this.props.model}</p>
            <div>{this.props.coolCars.map((car,index)=><p key={index}>{car}</p>)}</div>


      </div>
    );
  }
}

export default App;
