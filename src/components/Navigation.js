import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
var FontAwesome = require('react-fontawesome');
class Navi extends Component {
  render() {
    return (
      <div>
         
           {/* add reponsive navigation */}
           <input type='checkbox' className="chk" />
                  <label for="chk" className="show-menu-btn">  
                  <FontAwesome
                     className="fas fa-bars"
                      name='bars'
                    />
                  </label>
               

                {/* navigation without reponsive */}


                <ul   className="menu">
     
                     <a  href="#sec1"> HOME</a>
                      <a href="#sec2" >ABOUT US </a>  
                      <a href="#sec3">STYLE </a>  
                      <a href="#sec4">DRAMA </a>  
                      <a href="#sec5"> CONTACT</a>  
                    <label for= "chk" className="hide-menu-btn">
                    <FontAwesome
                    className="fas fa-times"
                      name='times'
                    />
                    </label>
                </ul>

    </div>
    );
  }
}

export default Navi;