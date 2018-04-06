import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CouseSale from './Coursesales';

class App extends Component {
  render() {

    var courses = [
      {
        name: 'IOS-Course',
        price: 99
      },
      {
        name: 'Andriod-Course',
        price: 79
      },
      {
        name: 'webDevelopment-Course',
        price: 100
      },
      {
        name: 'Testing-Course',
        price: 70
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course sales purchase</h1>
        </header>
        <CouseSale items={courses} />
      </div>
    );
  }
}

export default App;
