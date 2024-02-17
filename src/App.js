import React from 'react';
import logo from "./assets/logo.png"
import './App.css';
import Router from './routes';


function App() {
  
return (
    <div className="container">
      <img src={logo} alt="" className="logo" />
      <h1 className="text">AirBnB Tech</h1>
      <div className="content">
        <Router/>
      </div>
    </div>
  )
}

export default App;
