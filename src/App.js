import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Route,BrowserRouter} from 'react-router-dom'
import HoverMenu from './components/Hovermenu';
import EyeFollow from './components/Eye';
import Navi from './components/Navigation';
import Happy from './components/Happy';
// import {for} from 'font-awesome'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route exact path='/' component={HoverMenu}/>
      <Route exact path='/eye' component={EyeFollow}/>
      <Route exact path='/nav' component={Navi}/>
      <Route exact path='/happynewyear' component={Happy}/>
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
