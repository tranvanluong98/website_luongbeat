import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'
var FontAwesome = require('react-fontawesome');

class Navi extends Component {
  render() {
    return (
      <div>
         
         <div class="header">
        <h2 class="logo">LUONG BEAT</h2>
        <input type="checkbox" id="chk"/>
        <label htmlFor="chk" className="show-menu-btn">
        <FontAwesome
          className="fas fa-ellipsis-h"
          name="ellipsis-h"
          />
        </label>

        <ul class="menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
            <label htmlFor="chk" className="hide-menu-btn">
                <FontAwesome className="fas fa-times"
                name="time"/>
            </label>
        </ul>
    </div>

    {/* <div class="content">
        <center>
            <img src="./src/img/5.jpg" alt=""/>
        </center>
        <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div> */}


           {/* add reponsive navigation */}
          

    </div>
    );
  }
}

export default Navi;