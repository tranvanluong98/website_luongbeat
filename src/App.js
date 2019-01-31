import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,BrowserRouter} from 'react-router-dom'
import HoverMenu from './components/Hovermenu';
import EyeFollow from './components/Eye';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route exact path='/' component={HoverMenu}/>
      <Route exact path='/eye' component={EyeFollow}/>
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
